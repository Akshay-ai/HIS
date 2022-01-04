const express = require('express');
const Doctors = require('../models/doctor');
const bcryptjs = require('bcryptjs');

var verify = require('./verify');

const doctorRouter = express.Router();
doctorRouter.use(express.json());

doctorRouter.route("/")
.get(verify.verifyUser, verify.verifyAdmin, (req, res) => {
    Doctors.find({}).select('-password')
    .then((doct) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(doct);
    }, (err) => res.send(err));
})
.post(verify.verifyUser, verify.verifyAdmin, async (req, res) => {
    const salt = await bcryptjs.genSalt(10);
    let setPass = await bcryptjs.hash(req.body.password,salt);
    req.body.password = setPass;
    Doctors.create(req.body)
    .then((doct) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(doct);
    }, (err) => res.send(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end("Put method is not supported here");
})
.delete(verify.verifyUser, verify.verifyAdmin, (req, res) => {
    Doctors.remove({}).select('-password')
    .then((doct) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(doct);
    }, (err) => res.send(err));
})

doctorRouter.route("/:docId")
.get(verify.verifyUser, verify.verifyAdmin, async (req, res) => {
    let doctor = await Doctors.findById(req.params.docId).select('-password');
    if(doctor) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(doctor);
    }
    else {
        const err = new Error("Doctor not found");
        res.send(err); 
    }
})
.post((req, res) => {
    res.statusCode = 403;
    res.end("Post is not possible");
})
.put(verify.verifyUser, verify.verifyAdmin, async (req, res) => {
    let doctor = await Doctors.findByIdAndUpdate(req.params.docId, {$set : req.body}, 
        {new : true}).select('-password');
    if(doctor) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(doctor);
    }
    else {
        const err = new Error("Doctor not found");
        res.send(err); 
    }
})
.delete(verify.verifyUser, verify.verifyAdmin, async (req, res) => {
    let doctor = await Doctors.findByIdAndDelete(req.params.docId).select('-password');
    if(doctor) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(doctor);
    }
    else {
        const err = new Error("Doctor not found");
        res.send(err); 
    }
})

doctorRouter.route("/docs/docField")
.post(async (req, res) => {
    let doctor = await Doctors.find({field : req.body.field, branch : req.body.branch});
    if (doctor) {
        let success = true;
        res.status(200).json({success, doctor})
    }
    else {
        res.send("Doctor's are not available");
    }
})


module.exports = doctorRouter;