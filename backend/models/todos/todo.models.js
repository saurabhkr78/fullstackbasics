import mongoose from "mongoose"

const todoSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false,

    },
    createdBy:{
        //special type used for reference
        //herewe will give reference of either user,models.
        type:mongoose.Schema.Types.ObjectId,
        Ref:"User"//always referered model name
    },
    subTodos:[//this will receive ref from another model
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]//array of subtodos
},{timestamps:true})

export const Todo=mongoose.model("todo",todoSchema)
