import mongoose from"mongoose"
//mini models for orderItem to store product and product quantity
const orderItemSchema=new mongoose.Schema({
    productId:{
        ref:"Product",
        type:mongoose.Schema.Types.ObjectId,
    },
    quantity:{
        type:Number,
        required:true,
    }
});
// Mini model for address
const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
});
//main order schema
const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{// we are referring
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    orderItems:{
       type: [orderItemSchema],//schema inside array

    },
    address:{
        type: addressSchema, // embedding the addressSchema
        required: true,
    },
    status:{
        type:String,
        //enum gives choices 
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"

    }
},{timestamps:true});


export const Order=mongoose("Order",orderSchema)