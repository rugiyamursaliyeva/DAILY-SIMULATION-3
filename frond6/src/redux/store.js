import { configureStore } from "@reduxjs/toolkit";
import productSlice from './reducers/productSlice'
import basketSlice from './reducers/basketSlice'
import wishlistSlice from './reducers/wishlistSlice'

export const store = configureStore({
    reducer: {
        product: productSlice,
        basket: basketSlice,
        wishlist: wishlistSlice
    }
})