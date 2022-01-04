var express = require('express');
var bcryptjs = require('bcryptjs');
var jsonwebtoken = require('jsonwebtoken');

const Doctors = require('../models/doctor');
const loginRouter = express.Router();
loginRouter.use(express.json());

let jwtSecret = "hospitalinformationsystem"

loginRouter.route("/")
.post(async (req, res) => {
    try {
        let success = false;
        console.log(req.body.username);
        var doctor = await Doctors.findOne({username : req.body.username});
        console.log(doctor);
        if(!doctor) res.status(400).json({error : "Login with correct details"});
        const passwordCompare = await bcryptjs.compare(req.body.password, doctor.password);
        if(!passwordCompare) {
            res.status(400).json({error : "Login with correct details"});
        }
        const data = {
            user : {
                id : doctor.id,
            }
        }
        const authToken = jsonwebtoken.sign(data,jwtSecret);
        let role = doctor.role;
        success = true;
        res.json({success, role, authToken})
    } catch (error) {
        res.status(500).json({error : "Internal Server Error"});
    }
})

module.exports = loginRouter;