// "use strict";
// import {
//     connection
// } from '../../databaseConnection';

// import 'babel-polyfill';
// //import {insertData} from '../Model/ControllerFunction';
// import {Logins} from '../Schema/LoginSchema';

// import {Customers} from "../Schema/customer.schema";
// import {Employees} from "../Schema/employees.schema";



// Customers.belongsTo(Employees,{

//     foreignKey:"EmployeeId",
//     targetKey:"UserId"

// });




// exports.LoginUser=async(request,response,next)=>{

//     try{
//             let username=request.body.username;
//             let password=request.body.password;

//             var date = new Date().toLocaleDateString();

//             console.log(date);
//     //   
//             console.log(username,password);
//             await Logins.findAll({
//                 where:{
//                     username:username,
//                     password:password
//                 },
//                 raw:true
//             }).then(result=>{
//                 console.log(result);
//             });
           
//     }
//     catch(error){

//     }
// }

// exports.getAllCustomers=async(request,response,next)=>{
//     try{

//         let EmployeeId=request.params.empid;
//         console.log(EmployeeId);

//         await Customers.findAll({


//             include:[{
//                 model:Employees,

//                 where:{

//                     UserId:EmployeeId
//                 }
//             }],

//             raw:true
//         }).then(result=>{
//             response.json(result);
//         });


//     }
//     catch(error)
//     {

//     }
// }