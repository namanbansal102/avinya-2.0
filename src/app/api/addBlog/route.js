import connectDb from "../../../../middleware/mongoose";
import Blogs from "../../../../models/Blogs";

export async function POST(req,res){
    try{
        await connectDb();
        const data=await req.json()
        const p=await new Blogs({
            blogCode:data.blogCode,
            title:data.title,
            image:data.image,
            travelType:data.travelType,
            authorName:data.authorName,
            summary:data.summary
        })
        await p.save();
        return Response.json({"success":true,"message":"Blog Successfully"})
    }
    catch(e){
        console.log(e);
        
        return Response.json({"success":false,"message":e})
    }
    
}