import { configureStore } from "@reduxjs/toolkit"
import categorySlice from "../features/category/categorySlice"
import productSlice from "../features/product/productSlice"

export const store = configureStore({
    reducer:{
        categoryData:categorySlice,
        productsData:productSlice
    },
})