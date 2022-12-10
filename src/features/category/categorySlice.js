import { createSlice } from "@reduxjs/toolkit"
import { fetchCategoryData } from "./categoryApi"

const categoryState = { categories: [] }

const categorySlice = createSlice({
    initialState: categoryState,
    name: "category",
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryData.fulfilled, (state, action) => {
            state.categories = action.payload
        })
    }
})

export default categorySlice.reducer