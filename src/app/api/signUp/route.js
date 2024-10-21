import connectDb from "../../../../middleware/mongoose"
import User from "../../../../models/UserSchema";
export async function POST(req,res) {
    try{

        await connectDb();
        const data=await req.json()
        const p=await new User({
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            password:data.password
        })
        await p.save();
        return Response.json({"success":true,"message":"User Created Successfully"})
    }
    catch(e){
        console.log(e);
        
        return Response.json({"success":false,"message":e})
    }
}