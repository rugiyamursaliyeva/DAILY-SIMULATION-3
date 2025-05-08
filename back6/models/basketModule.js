import mongoose from "mongoose";

const basketShema = mongoose.Schema({
    image:{type:String, required:true},
    name:{type:String, required:true},
    price:{type:String, required:true}
}, {timestamps:true})

const BasketModel = mongoose.model('Basket', basketShema)

export default BasketModel