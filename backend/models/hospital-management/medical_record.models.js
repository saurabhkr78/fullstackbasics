import mongoose from"mongoose"
const medicalRecordSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
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
    }
},{timestamps:true})

export const MedicalRecord=mongoose.model("MedicalRecord",medicalRecordSchema)
