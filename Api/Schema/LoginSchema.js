import {sequelize} from "../../databaseConnection";
var Sequelize=require('sequelize');

//.................. table for Login table................
export const Logins=sequelize.define('Logins',{
    UserId:{
        type:Sequelize.INTEGER,
    },
     Username:{
         type:Sequelize.STRING
     },
     Password:{
         type:Sequelize.STRING
     },
     createdAt: Sequelize.DATE,
     updatedAt: Sequelize.DATE,
   
 });
 Logins.removeAttribute("id");
 Logins.removeAttribute("createDateTime");
 Logins.removeAttribute("updateDateTime");
 



 
