import Sequelize from "sequelize";


module.exports=function(sequelize,DataType){

    var Students=sequelize.define('Students',{
        StudentsId:{
            type:Sequelize.UUIDV1,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1
        },
        StudentsRegistrationNo:{
             type:Sequelize.STRING
         },
         StudentsName:{
             type:Sequelize.STRING
         },
         StudentsRoll:{
             type:Sequelize.STRING
         },
         DateOfBirth:{
            type:Sequelize.STRING
        },
        GurdianName:{
            type:Sequelize.STRING
        },
        GurdianPhoneNo:{
            type:Sequelize.STRING
        },
        PhotoURL:{
            type:Sequelize.STRING
        },
        status:{
            type:Sequelize.INTEGER
        },
        Address:{
             type:Sequelize.STRING
         },
         Pin:{
             type:Sequelize.STRING
         },
         createDateTime: Sequelize.DATE,
         updateDateTime: Sequelize.DATE,
     },{
        tableName: "Students"
     });
     Students.removeAttribute("id");

     return Students;
}

