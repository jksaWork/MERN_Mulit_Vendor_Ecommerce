import nodemailer from "nodemailer";

export const sendMail = async (options) => {
  const trans = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    //     service: process.env.MAIL_SERVICE, // upgrade later with STARTTLS
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const { message, subject , to } = options;
  const data = {
    from: process.env.MAIL_FROM,
    text: message,
    to,
    subject,
  };
  await trans.sendMail(data);
};
