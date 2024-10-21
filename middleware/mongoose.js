import mongoose from "mongoose";
const connectDb=async()=>{
    try{

        await mongoose.connect(`mongodb+srv://osc-chitkara:K9nQgWP-iz63vSR@atlascluster.erhic.mongodb.net/OSC`,{
            
        })
        console.log("Mongo DB Connected");
    }
    catch(error){
        console.log("Error Connecting To MongoDb",error);
    }
    
}
export default connectDb