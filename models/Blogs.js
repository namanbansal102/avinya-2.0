const mongoose=require("mongoose")
const BlogSchema=new mongoose.Schema({
    blogCode:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    image:{type:String,default:"#"},
    summary:{type:String,default:"Orgainsed By Open Source Chandigarh"},
},{timestamps:true})
// Not For Recompiling The Module
mongoose.models={}
export default mongoose.model("Blogs",BlogSchema)