const mongoose=require("mongoose")
const BlogSchema=new mongoose.Schema({
    blogCode:{type:String,required:true,unique:true},
    title:{type:String,required:true},
    image:{type:String,default:"#"},
    travelType:{type:String,default:"#"},
    authorName:{type:String,required:"#"},
    authorId:{type:String,default:"#"},
    summary:{type:String,default:"Orgainsed By Open Source Chandigarh"},
    comments:{type:[{authorName:String,comment:String}]}
},{timestamps:true})
// Not For Recompiling The Module
mongoose.models={}
export default mongoose.model("Blogs",BlogSchema)