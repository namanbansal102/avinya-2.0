const mongoose=require("mongoose")
const UsersSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},   
},{timestamps:true})
// Not For Recompiling The Module
mongoose.models={}
export default mongoose.model("User",UsersSchema)