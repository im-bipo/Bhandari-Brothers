const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.NODE_ENV_SMTP_HOST,
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.NODE_ENV_SMTP_HOST_USER,
    pass: process.env.NODE_ENV_SMTP_HOST_PASSWORD,
  },
});

export async function sendMail({ subject, message, reciver }:{
    subject: string;
    message: string;
    reciver: string;
  
}) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Bhandari Brothers" <no-reply@bbjob.com>',
    to: reciver,
    subject: subject,
    html: message,
  });
}

