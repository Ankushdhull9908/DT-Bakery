import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})


const user = mongoose.model('User',userschema)


export default userschema