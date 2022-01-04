var express = require('express');
var Doctors = require('../models/doctor');
var bcryptjs = require('bcryptjs');

var resetRouter = express.Router();
resetRouter.use(express.json());

resetRouter.route('/')
.post(async (req, res) => {
    let doctor = await Doctors.findById(req.body.id);
    if(doctor) {
    const salt = await bcryptjs.genSalt(10);
    console.log("Salt : ", salt);
    let setPass = await bcryptjs.hash(req.body.password, salt);
        doctor.password = setPass;
        await doctor.save();
        console.log(doctor);
        res.status(200).send("Password Updated");
    }
    else {
        res.send("Your Doctor Unique id is incorrect");
    }
})

module.exports = resetRouter;