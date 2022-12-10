import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductData = createAsyncThunk("product/fetchCategoryData",
    async (name) => {
        const response = await axios(`https://dummyjson.com/products/category/${name}`)
        return response.data.products
    })

export const fetchDetailsData = createAsyncThunk("details/fetchDetailsData",
    async (id) => {
        const response = await axios(`https://dummyjson.com/products/${id}`)
        return response.data
    })

export const fetchSearchData = createAsyncThunk("search/fetchSearchData",
    async (nameInp) => {
        const response = await axios(`https://dummyjson.com/products/search?q=${nameInp}`)
        console.log(response.data);
        return response.data.products
    })