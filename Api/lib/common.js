

import nodemailer from "nodemailer";
import request from "request";


export async function sendEmail__(emailId, subject, message, attachments = {}) {
    let mailOptions = {};
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "subhajyotidey01@gmail.com",
            pass: "Jack@1993"
        }
    });
    if (Object.keys(attachments).length > 0) {
        mailOptions = {
            from: "subhajyotidey01@gmail.com",
            to: emailId,
            subject: subject,
            text: message,
            attachments: [attachments]
        };
    } else {
        mailOptions = {
            from: "subhajyotidey01@gmail.com",
            to: emailId,
            subject: subject,
            text: message
        };
    }
    return await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        return console.log("Mail Send");
    });
}