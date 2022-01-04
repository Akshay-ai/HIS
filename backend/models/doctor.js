const mongoose = require('mongoose');

const desSchema = new mongoose.Schema({
    about : {
        type : String,
    },
    pic : {
        type : String,
    },
});

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    branch : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    desription : {
        type : String,
        required : true,
    },
    field : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        default : "doctor"
    },
    // timings : [mongoose.Schema.Types.Mixed],
    
},
{strict: false},
{
    timestamps : true,
});

const doctSchema = mongoose.model('Doctor', doctorSchema);

module.exports = doctSchema;
