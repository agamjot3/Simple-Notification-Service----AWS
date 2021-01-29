# SNS-OTP-APP
Otp app with nodejs and aws sns

//Create a '.env' file with the following details--

AWS_ACCESS_KEY_ID=//enter your access key id
AWS_SECRET_ACCESS_KEY=//enter your secret access key
AWS_REGION=//region

//Open postman app and configure the following details

Set Protocol to Post
Enter host --> localhost:3000
Edit Body---
         {
    "message":"Your OTP Verification Code is ",
    "number": "919354074829",
    "subject": "Crowd"
}

//On terminal

npm start

//On Postman

Send

