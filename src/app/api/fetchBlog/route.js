import connectDb from "../../../../middleware/mongoose";
import Blogs from "../../../../models/Blogs";

export async function POST(req,res){
    let data=await req.json();
    await connectDb();
    let p=await Blogs.findOne({"blogCode":data.blogCode})
    return Response.json({"success":true,"data":p});

}