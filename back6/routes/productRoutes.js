import express from 'express'
import { deleteProduct, getProducts, postProduct } from '../controllers/productController.js'
import { deleteBasket, getBaskets, postBasket } from '../controllers/basketController.js'
import { deletewishlist, getWishlists, postwishlist } from '../controllers/wishlistContoller.js'

const router = express.Router()

router
.get('/product', getProducts)
.post('/product', postProduct)
.delete('/product/:id', deleteProduct)
.get('/basket', getBaskets)
.post('/basket', postBasket)
.delete('/delete/:id', deleteBasket)
.get('/wishlist', getWishlists)
.post('/wishlist', postwishlist)
.delete('/wishlist/:id', deletewishlist)

export default router