import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategoryData = createAsyncThunk("category/fetchCategoryData",
    async () => {
        const response = await axios("https://dummyjson.com/products/categories")
        return response.data
    })