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
    Doctors.deleteMany({}).select('-password')
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

doctorRouter.route("/docs/appointment/timing")
.get(async (req, res) => {
    try {
        let doctor = await Doctors.findOne({username : req.header('name')});
        if(!doctor.timings.length) {
            console.log("Hello1");
            res.setHeader('Content-Type', 'application/json');
            res.send({success : true});
            return;
        }
        for (let index = 0; index < doctor.timings.length; index++) {
            console.log("Inside");
            console.log("Index : ",index);
            console.log(doctor.timings[index].date);
            console.log(req.header('dateNow'));
            if(doctor.timings[index].date === req.header('dateNow')) {
                console.log("Double Inside");
                for (let i = 0; i < doctor.timings[index].time.length; i++) {
                    console.log("Hello2");
                    if(doctor.timings[index].time[i].value === req.header('time')) {
                        if(doctor.timings[index].time[i].count === 5 ) {
                            console.log("Hello3");
                            res.setHeader('Content-Type', 'application/json');
                            res.status(200).json({success : false});
                            return;
                        }
                        else {
                            res.setHeader('Content-Type', 'application/json');
                            res.status(200).json({success : true});
                            return;
                        } 
                    }
                }
            }
        }
        console.log("Hello4");
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({success : true});
        return
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({success : false});
    }
})
.post(async (req, res) => {
    try {
        let doctor = await Doctors.findOne({username : req.body.name});
        for(let i = 0; i < doctor.timings.length; i++) {
            if(doctor.timings[i].date === req.body.date) {
                for(let j = 0; j < doctor.timings[i].time.length; j++) {
                    if(doctor.timings[i].time[j].value === req.body.time) {
                        doctor.timings[i].time[j].count += 1;
                        await doctor.save();
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(doctor);
                        return;
                    }
                }
                doctor.timings[i].time.push({value : req.body.time});
                doctor.timings[i].time[doctor.timings[i].time.length - 1].count += 1;
                await doctor.save();
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(doctor);
                return;
            }
        }
        doctor.timings.push({date : req.body.date});
        doctor.timings[doctor.timings.length - 1].time.push({value : req.body.time});   
        doctor.timings[doctor.timings.length - 1].time[0].count += 1;   
        await doctor.save();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(doctor);
    } catch (error) {
        console.log("Hello from catch");
        res.json({success : false});
    }
})

module.exports = doctorRouter;