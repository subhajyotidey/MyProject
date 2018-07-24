
import { request } from "http";

import {getConnection} from "../../Api/lib/common";

exports.findAll=async(request,response,next)=>{

    try{

        let info=request.headers.information;

        console.log(info);
        let StudentDB=getConnection(["Student"],info);

        console.log(StudentDB);
        await StudentDB.Students.findAll();
    }
    catch(err)
    {
        console.log(err);

    }
}