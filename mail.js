const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
});

transporter.sendMail({
    from: 'info@dennis-boldt.de',
    to: 'info@dennis-boldt.de',
    subject: 'Message',
    text: 'I hope this message gets delivered!'
}, (err, info) => {
   if(err) { 
     return console.error('Error:', err);
   }
   console.log(info);
});

