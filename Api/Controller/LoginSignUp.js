import {SchoolLogins} from '../Schema/SignUp.schema';
import { request } from 'https';
const importer = require('node-mysql-importer');
var mysql = require("mysql2");
import {
    sendEmail__
} from '../lib/common';

//Insert data from Employee
exports.SignUp=async(request,response,next)=>{

    try{
            let schoolName=request.body.SchoolName;
            let schoolAddress=request.body.SchoolAddress;
            let Email=request.body.Email;
            let vcode=Math.floor(Math.random()*10000);
    
                const data ={
            
                    SchoolName:schoolName,
                    Address:schoolAddress,
                    Email:Email,
                    verificationCode:vcode
            
                };
    
             await SchoolLogins.create(data).then(result=>{

                sendEmail__(Email,"Verification Code","Verification Code for School Management System is"+vcode);
                response.json(result);
            });
    }
    catch(error){

    }
}

exports.verify=async(request,response)=>{

    try{


        let vcode=request.body.verificationcode;
        let Email=request.body.email;
        let schoolId=request.body.schoolId;
        let password=request.body.password;


     
            await SchoolLogins.update({
                Password:password
            },{
                where:{
                    Email:Email,
                    schoolId:schoolId

                }
            }).then(result=>{

                //create database
                var con = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "123"
                });
                  
                
                con.connect(function(err){
                    if (err) throw err;
                    console.log("Connected ------......");
                    let sql = "create database `" + schoolId + "111222333`";
                    con.query(sql, function (err, res) {
                        if (err) throw err;
                    });
                });

                importer.config({
                    'host': "localhost",
                    'user': "root",
                    'password': "123",
                    'database': schoolId + '111222333'
                })

                importer.importSQL(__dirname + "/knack_users.sql").then(() => {
                    console.log("all statement executed");
                })
                // response.json(result);
                response.json({ data: result });
            });
    }

    catch(error)
    {

    }
    


}

// Show All Data from Employee
exports.ShowData=async(request,response,next)=>{

    try{

        await Employees.findAll({raw:true}).then(result =>{
            console.log(result);
            response.json(result);
        });
    }
    catch(error)
    {

    }

}

// Delete Data from Employee
exports.DeleteEmployee=async(request,response,next)=>{
    try{
        
    }
    catch(error)
    {

    }
}

//Update Data from Employee
exports.UpdateEmployee=async(request,response,next)=>{
    try{

        Name=request.body.name;
        Designation=request.body.designation;
        Salary=request.body.salary;

        console.log(Name,Designation,Salary);
        await Employees.update().then(result=>{
            response.json(result);
        });

    }
    catch(error)
    {

    }
}