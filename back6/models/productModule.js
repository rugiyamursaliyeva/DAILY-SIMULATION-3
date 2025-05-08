import mongoose from "mongoose";

const productShema = mongoose.Schema({
    image:{type:String, required:true},
    name:{type:String, required:true},
    price:{type:String, required:true}
}, {timestamps:true})

const ProductModel = mongoose.model('Product', productShema)

export default ProductModel