import WishlistModel from "../models/wishlistModule.js"

const getWishlists = async (req, res) => {
    const wishlists = await WishlistModel.find()
    res.json(wishlists)
}

const postwishlist = async (req, res) => {
    const {image, name, price} = req.body
    const wishlist = {image, name, price}
    await WishlistModel.create(wishlist)
    res.json(wishlist)
}

const deletewishlist = async (req, res) => {
    const {id} = req.params
    await WishlistModel.findByIdAndDelete(id)
    res.json(`${id} -li wishlist silindi`)
}

export {getWishlists, postwishlist, deletewishlist}