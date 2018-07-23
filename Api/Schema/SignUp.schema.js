import {sequelize} from "../../databaseConnection";
var Sequelize=require('sequelize');

 

export const SchoolLogins=sequelize.define('SchoolLogin',{
    SchoolId:{
        type:Sequelize.UUIDV1,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
    },
    SchoolName:{
         type:Sequelize.STRING
     },
     Address:{
         type:Sequelize.STRING
     },
     Email:{
         type:Sequelize.STRING
     },
     verificationCode:{
         type:Sequelize.INTEGER
     },
     Password:{
         type:Sequelize.STRING
     },
     CreatedAt: Sequelize.DATE,
     UpdatedAt: Sequelize.DATE,
 },{
    tableName: "SchoolLogin"
 });
 SchoolLogins.removeAttribute("id");
 SchoolLogins.removeAttribute("createDateTime");
 SchoolLogins.removeAttribute("updateDateTime");
