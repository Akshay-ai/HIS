var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var patientRouter = require('./routes/patientRouter');
var doctorRouter = require('./routes/doctorRouter');
var loginRouter = require('./routes/auth');
var resetRouter = require('./routes/resetPassword');

var app = express();
app.use(express.json());

const port = 5000;
app.use(cors())

const mongoURL = 'mongodb://localhost:27017/miniProject';
mongoose.connect(mongoURL)
.then(() => {
    console.log("Connected to server");
})
.catch((err) => console.log(err));

app.get('/',(req,res) => {
    res.send('Hello From Server');
})

app.use('/patient', patientRouter);
app.use('/doctor', doctorRouter);
app.use('/login', loginRouter);
app.use('/resetpassword', resetRouter);

app.listen(port, ()=>{
    console.log(`Example App Listening at http://localhost:${port}`);
})