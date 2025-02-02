import mongoose from "mongoose"

const subTodoSchema=new mongoose.Schema({
   content:{
    type:String,
    reuired:true,
   },
   complete:{
    type:Boolean,
    default:false,
   },
   createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",

   }
},{timestamps:true})

export const Todo=mongoose.model("SubTodo",subTodoSchema)

