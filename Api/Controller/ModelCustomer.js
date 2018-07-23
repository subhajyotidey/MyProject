// import {
//     Customers
// } from "../Schema/customer.schema";
// import {
//     request
// } from 'https';

// import {
//     sendEmail__
// } from '../lib/common';
// var mysql = require("mysql2");
// const importer = require('node-mysql-importer');




// //Insert data to Customer
// export const insertCustomerDetails = async (request, response) => {
//     try {
//         let Name = request.body.Name;
//         let Address = request.body.Address;
//         let Country = request.body.Country;
//         let Phone = request.body.Phone;
//         let EmployeeId = request.body.EmployeeId;
//         let Email = request.body.Email;

//         let Vcode = Math.floor(Math.random() * 89999);

//         console.log(Vcode);
//         let data = {
//             Name,
//             Address,
//             Country,
//             Phone,
//             EmployeeId,
//             Vcode,
//             Email
//         };

//         await Customers.create(data).then(
//             result => {


//                 //send email to 

//                 sendEmail__(Email, "Verification Code", "Verification Code for registration is " + Vcode, {});
//                 //end of sending mail
//                 // var con = mysql.createConnection({
//                 //     host: "localhost",
//                 //     user: "root",
//                 //     password: "123"
//                 // });

//                 // //          con.connect(function(err){
//                 // //             if(err) throw err;
//                 // //             console.log("Connected ------......");
//                 // //             let sql="create database `"+result.CustomerId+"111222333`";
//                 // //              con.query(sql,function(err,res){
//                 // //                 if(err) throw err;
//                 // //             });
//                 // //         });


//                 // //         importer.config({
//                 // //             'host':"localhost",
//                 // //             'user':"root",
//                 // //             'password':"123",
//                 // //             'database': result.CustomerId+'111222333'
//                 // //         })

//                 // //         importer.importSQL(__dirname + "/knack_users.sql").then(()=>{
//                 // //             console.log("all statement executed");
//                 // //         })
//                 // //         response.json(result);
//             });

//     } catch (error) {
//         throw error;
//     }
// }


// //verify the Vcode


// export const verify = async (request, response) => {
//     try {

//         let customerId=request.body.customerId;
//         let vcode=request.body.vcode;

//         console.log(customerId,vcode);
//         let Customer= await Customers.findAll({

//             where:{

//                 CustomerId:customerId
//             }
//         });

//         if(Customer.length ==0)
//         {
//             response.json(" No Customer with such CustomerId exists ");
//         }
//         else
//         {
//             var con = mysql.createConnection({
//                 host: "localhost",
//                 user: "root",
//                 password: "123"
//             });

//                      con.connect(function(err){
//                         if(err) throw err;
//                         console.log("Connected ------......");
//                         let sql="create database `"+customerId+"111222333`";
//                          con.query(sql,function(err,res){
//                             if(err) throw err;
//                         });
//                     });


//                     importer.config({
//                         'host':"localhost",
//                         'user':"root",
//                         'password':"123",
//                         'database': customerId+'111222333'
//                     })

//                     importer.importSQL(__dirname + "/knack_users.sql").then(()=>{
//                         console.log("all statement executed");
//                     })
//                     response.json(Customer);
//         }

//     } catch (error) {
//         throw error;
//     }

// }



// //end o fverifying the verification code

// // Show All Data from Customer
// exports.getCustomerDetails = async (request, response, next) => {

//     try {


//         await Customers.findAll().then(result => {

//             response.json(result);
//         });
//     } catch (error) {

//     }

// }

// // Delete Data from Customer
// exports.DeleteData = async (request, response, next) => {
//     try {

//         let id = request.params.id;
//         console.log(id);

//         await Customers.destroy({
//             where: {
//                 CustomerId: id
//             }
//         }).then(result => {
//             response.json(result);
//         });

//     } catch (error) {

//     }
// }

// //Update Data from Employee
// exports.UpdateCustomerDetails = async (request, response, next) => {
//     try {

//         let Name = request.body.Name;
//         let Address = request.body.Address;
//         let Country = request.body.Country;
//         let Phone = request.body.Phone;
//         let id = request.params.id;


//         await Customers.update({
//             Name: Name,
//             Address: Address,
//             Country: Country,
//             Phone: Phone
//         }, {
//             where: {
//                 CustomerId: id
//             }
//         }).then(result => {
//             response.json(result);
//         });

//     } catch (error) {

//     }
// }