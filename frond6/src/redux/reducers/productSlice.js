import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//GET
export const getProductsThunk = createAsyncThunk('/product/get', async () => {
    const res = await axios.get("http://localhost:5000/product")
    return res.data
}) 

//POST
export const postProductsThunk = createAsyncThunk('/product/post', async (data) => {
    await axios.post("http://localhost:5000/product", data)
    return data
})

//DELETE
export const deleteProductsThunk = createAsyncThunk('/product/delete', async (id) => {
    await axios.delete(`http://localhost:5000/product/${id}`, id)
    return id
})

const productSlice = createSlice({
    name: 'product',
    initialState: {},
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getProductsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getProductsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        })
        .addCase(getProductsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        //post
        .addCase(postProductsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.product.push(action.payload)
        })
        //delete
        .addCase(deleteProductsThunk.fulfilled, (state, action) => {
            state.loading =false
            state.product = state.product.filter(item => item._id !== action.payload)
        })
    }
})

export default productSlice.reducer