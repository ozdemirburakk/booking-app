import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
})