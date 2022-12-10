import { createSlice } from "@reduxjs/toolkit"
import { fetchDetailsData, fetchProductData, fetchSearchData } from "./productApi"


const productState = {
    products: [],
    product: {}
}

const productSlice = createSlice({
    initialState: productState,
    name: "product",
    extraReducers: (builder) => {
        builder.addCase(fetchProductData.fulfilled, (state, action) => {
            state.products = action.payload
        })
        builder.addCase(fetchDetailsData.fulfilled, (state, action) => {
            state.product = action.payload
        })
        builder.addCase(fetchSearchData.fulfilled, (state, action) => {
            state.products = action.payload
            console.log(state.products)
        })
    }
})

export default productSlice.reducer