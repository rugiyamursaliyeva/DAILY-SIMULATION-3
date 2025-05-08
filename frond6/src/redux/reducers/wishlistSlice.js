import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//GET
export const getWishlistsThunk = createAsyncThunk('/product/get', async () => {
    const res = await axios.get("http://localhost:5000/wishlist")
    return res.data
}) 

//POST
export const postWishlistsThunk = createAsyncThunk('/product/post', async (data) => {
    await axios.post("http://localhost:5000/wishlist", data)
    return data
})

//DELETE
export const deleteWishlistsThunk = createAsyncThunk('/product/delete', async (id) => {
    await axios.delete(`http://localhost:5000/wishlist${id}`, id)
    return id
})

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {},
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getWishlistsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getWishlistsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.wishlist = action.payload
        })
        .addCase(getWishlistsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        //post
        .addCase(postWishlistsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.wishlist.push(action.payload)
        })
        //delete
        .addCase(deleteWishlistsThunk.fulfilled, (state, action) => {
            state.loading =false
            state.wishlist = state.wishlist.filter(item => item._id !== action.payload)
        })
    }
})

export default wishlistSlice.reducer