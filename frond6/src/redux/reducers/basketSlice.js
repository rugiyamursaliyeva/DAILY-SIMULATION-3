import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//GET
export const getBasketsThunk = createAsyncThunk('/product/get', async () => {
    const res = await axios.get("http://localhost:5000/basket")
    return res.data
}) 

//POST
export const postBasketsThunk = createAsyncThunk('/product/post', async (data) => {
    await axios.post("http://localhost:5000/basket", data)
    return data
})

//DELETE
export const deleteBasketsThunk = createAsyncThunk('/product/delete', async (id) => {
    await axios.delete(`http://localhost:5000/basket/${id}`, id)
    return id
})

const basketSlice = createSlice({
    name: 'basket',
    initialState: {},
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getBasketsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getBasketsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.basket = action.payload
        })
        .addCase(getBasketsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        //post
        .addCase(postBasketsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.basket.push(action.payload)
        })
        //delete
        .addCase(deleteBasketsThunk.fulfilled, (state, action) => {
            state.loading =false
            state.basket = state.basket.filter(item => item._id !== action.payload)
        })
    }
})

export default basketSlice.reducer