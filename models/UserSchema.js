const mongoose=require("mongoose")
const UsersSchema=new mongoose.Schema({
    name:{type:String,required:true},
    rollNumber:{type:String,required:true,unique:true},
    email:{type:String,require:true},
    phone:{type:String,require:true},
    group:{type:Number,require:true},
    department:{type:String,require:true,default:"CSE"},
    year:{type:Number,require:true},
    mentorName:{type:String,require:true}
},{timestamps:true})
// Not For Recompiling The Module
mongoose.models={}
export default mongoose.model("User",UsersSchema)