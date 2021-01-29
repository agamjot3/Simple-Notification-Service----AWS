const express = require('express');
const otpGenerator = require('otp-generator')
const app = express();
app.use(express.json());
require('dotenv').config();

var AWS = require('aws-sdk');
AWS.config.update({region:'ap-south-1'});


app.post('/otp', (req, res) => {
    const newotp = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });
    
    console.log("Message = " + req.body.message + newotp);
    console.log("Number = " + req.body.number);
    console.log("Subject = " + req.body.subject);
    var params = {
        Message: req.body.message + newotp,
        PhoneNumber: '+' + req.body.number,
       
    };

    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

    publishTextPromise.then(
        function (data) {
            res.end(JSON.stringify({ MessageID: data.MessageId }));
        }).catch(
            function (err) {
                res.end(JSON.stringify({ Error: err }));
            });

});

app.listen(3000, () => console.log('SMS Service Listening on PORT 3000'))