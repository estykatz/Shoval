const nodemailer = require('nodemailer');

const addEmail = async (email) => {
  console.log('connect server email');
  console.log(email);
  const newemail = email.email;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'esty3149@gmail.com',
      pass: 'ek314924'
    }
  });

  var mailOptions = {
    from: 'esty3149@gmail.com',
    to: newemail,
    subject: 'Sending Email from Shoval',
    text: 'מוזמנת להצטרף לשובל!!!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      return ('Email sent: ' + info.response);
    }
  });
}
module.exports = {
  addEmail
}