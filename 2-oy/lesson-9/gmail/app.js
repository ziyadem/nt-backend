const express = require('express');
var nodemailer = require('nodemailer');
var cors = require('cors');
const app = express()

let num = Math.random()

app.use(cors())
app.use(express.json())

app.post('/send_gmail', (req, res) => {
  const { email } = req.body
  console.log(email);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jorabeksuyunov69@gmail.com',
      pass: 'jmdrcogdwytppvtx'
    }
  });
   
  var mailOptions = {
    from: 'jorabeksuyunov69@gmail.com', 
    to: `${email}`,
    subject: 'Sending Email using Node.js',
    html: `<b>Salom ${email} yana sizga yuboryapman!!!!.</b>`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
  res.send({
    msg: 'Success!'
  })
})


app.listen(4001, console.log(4001))