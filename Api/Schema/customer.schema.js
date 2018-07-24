import {sequelize} from "../../databaseConnection";
var Sequelize=require('sequelize');

//..................table for customer table.....................
export const Customers=sequelize.define('customers',{
    CustomerId:{
        type:Sequelize.UUIDV1,
        primaryKey:true,
        defaultValue:Sequelize.UUIDV1
    },
    EmployeeId:{
        type:Sequelize.STRING
    },
    Name:{
        type:Sequelize.STRING
    },
    Address:{
        type:Sequelize.STRING
    },
    Country:{
        type:Sequelize.STRING
    },
    Phone:{
        type:Sequelize.INTEGER
    },
    Vcode:{
        type:Sequelize.INTEGER
    },
    Email:{
        type:Sequelize.STRING
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});
Customers.removeAttribute("id");
Customers.removeAttribute("createDateTime");
Customers.removeAttribute("updateDateTime");