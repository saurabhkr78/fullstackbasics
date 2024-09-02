import mongoose from"mongoose"
// Mini model for Doctor's working hours in hospitals
const doctorHospitalScheduleSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor", // Reference to Doctor model
        required: true,
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital", // Reference to Hospital model
        required: true,
    },
    schedule: [{
        day: {
            type: String, // e.g., "Monday", "Tuesday"
            required: true,
        },
        hours: {
            type: Number, // Hours worked on the specific day
            required: true,
        }
    }]
}, { timestamps: true });
const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    salary:{
        type:String,
        required:true,
    },
    qualification:{
        type:String,
        required:true,
    },
    experienceInYears:{
        type:Numbers,
        default:0,
    },
    worksInHospitals:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }],
    doctorHospitalSchedules: [{ // Embedding the mini model for hospital schedules
        type: doctorHospitalScheduleSchema
    }]
},{timestamps:true});

export const Doctor=mongoose.model("Doctor",doctorSchema)
export const DoctorHospitalSchedule = mongoose.model("DoctorHospitalSchedule", doctorHospitalScheduleSchema);
