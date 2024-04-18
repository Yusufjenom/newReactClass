import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


const productSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        status: "success"
    },
    reducers:{

    },
    extraReducers: (builder) => {
       builder
       .addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = "success"
       })
       .addCase(getProducts.pending, (state, action) => {
             state.status = "pending"
       })
       .addCase(getProducts.rejected, (state, action) => {
            state.status = "error"
       })
    }
});



export default productSlice.reducer;

export const getProducts = createAsyncThunk('products', async () => {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    return result
})
