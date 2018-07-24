import lodash from "lodash";
import nodemailer from "nodemailer";
import request from "request";
const Sequelize = require('sequelize');

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

export async function getConnection(table, data) {

    const Op = Sequelize.Op;
    const SchoolDatabaseCredentials = {
        host: 'localhost',
        user: 'root',
        password: '123',
        database: data.split(",")[1]
    }

    console.log(table);

    console.log(SchoolDatabaseCredentials.user);

    var sequelize = new Sequelize(SchoolDatabaseCredentials.database, SchoolDatabaseCredentials.user, SchoolDatabaseCredentials.password, {
            host: SchoolDatabaseCredentials.host,
            port: 3306,
            dialect: "mysql",
            operatorsAliases: Op,
            pool: {
                max: 100,
                min: 0,
                idle: 10000
            }
        }
    
    ),

    db = {};
    var model;
    table.forEach(function (element) {
        model = sequelize.import(
            "../../Api/Schema/" + element + ".schema.js"
        );
        db[model.name] = model;

    });

    console.log(model);
    console.log(db);
    return lodash.extend({
            sequelize: sequelize
        },
        db
    );

}