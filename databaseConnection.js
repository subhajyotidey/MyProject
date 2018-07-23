import {DatabaseCredentials} from "./constant";
var mysql=require("mysql2");

// var mongoose = require('mongoose');
 
// mongoose.connect('mongodb://localhost/mongoose_basics');
const database=DatabaseCredentials.database;
const host=DatabaseCredentials.host;
const username=DatabaseCredentials.user;
const password=DatabaseCredentials.password;

const Sequelize = require('sequelize');

//Data Base Connectivity using Sequelization..............
export const sequelize= new Sequelize(database,username,password,{
    host:host,
    dialect:'mysql',
    pool:{
        max:10,
        min:0,
        idle:1000
    }
});


//Database Connectivity..........
export  const connection = mysql.createConnection(DatabaseCredentials);

