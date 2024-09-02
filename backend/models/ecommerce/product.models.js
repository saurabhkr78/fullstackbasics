import mongoose from"mongoose"
const productSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    //we can keep image in mongodb in buffer format but we should not keep it make it heavy .either we keep it on server in seperate folder and folder public url is taken in used else third party services like aws bucket sdk return a url in response while calling api.cloudnary is also an example.
    productImage:{
        type:String,
    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
        default:0,
        type:Number,
    },
    //we are referrring category model
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Product=mongoose.model("Product",productSchema)
