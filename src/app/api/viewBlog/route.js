import connectDb from "../../../../middleware/mongoose";
import Blogs from "../../../../models/Blogs";

export async function GET(req,res){
    await connectDb()
    let data=await Blogs.find();
    return Response.json({"success":true,"data":data})

}