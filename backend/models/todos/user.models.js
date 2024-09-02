import mongoose from "mongoose"
////this is our schema
const userSchema=new mongoose.Schema(//{}->its a obejct
    {
        // Username:String,
        // email:String,
        // isActive:Boolean,
        // super power of mongoose
//first object for what data you will accept
        username:{
            type:String,
            required:true,// required feild in your signup form,without checking this mongoose won't save data whether you have written in controller to check this filed or not.
            unique:true,//unique username for each user
            lowercase:true,//always lowercase username.
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,

        },
        password:{
            type:String,
            required:true,

        },
       }, 
//according to documentation we need to pass second object: timestamps whatwe are taking 
       {timestamps:true},

)
//we need to export this schema by making a model and it takes two parameter one model for what and second how? in string format.
export const User=mongoose.model("User",userSchema)

