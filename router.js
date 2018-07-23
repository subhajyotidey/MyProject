var http = require("http");
var express = require("express");
var app = express();

// require("babel-core/register");
// require("babel-polyfill");


import bodyParser from "body-parser";


import {
    getCustomerDetails as getCustomerDetails,
    insertCustomerDetails as insertCustomerDetails,
    UpdateCustomerDetails as UpdateCustomerDetails,
    DeleteData as DeleteData,
    LoginUser as LoginUser,
    
} from "./Api/Controller/ModelCustomer";

import {
    SignUp as SignUp,
    verify as verify,
    ShowData as ShowData,
    DeleteEmployee as DeleteEmployee,
    UpdateEmployee as UpdateEmployee
} from "./Api/Controller/LoginSignUp";

import {
    getAllCustomers as getAllCustomers

} from "./Api/Controller/ModelFunctions"; 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//setup Server
var server = app.listen(8080, "127.0.0.1", function () {

    var host = server.address().address
    var port = server.address().port

    console.log("listening at %s, %s", host, port);
});


app.post('/SignUp', SignUp);
app.put('/verify',verify);

