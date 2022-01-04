const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    medicine_name : {
        type : String,
    },
    timing : {
        type : String
    },
},
{
    timestamps : true,
});

const reportSchema = new mongoose.Schema({
    testname : {
        type : String,
    },
    files : {
        type : String
    },
},
{
    timestamps : true,
});

const PatientSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    Phone_Number : {
        type : Number,
        required : true,
        minlength : 10,
        maxlength : 10
    },
    doctor_name : {
        type : String,
        require : true,
    },
    symptoms : {
        type : String,
    },
    ward_number : {
        type : Number,
    },
    diet : {
        type : String
    },
    prescription : [prescriptionSchema],
    //About Patient Problem
    description : {
        type : String
    },
    reports : [reportSchema],
},{
    timestamps : true,
});

const patientSchema = mongoose.model('Patient', PatientSchema);

module.exports = patientSchema;