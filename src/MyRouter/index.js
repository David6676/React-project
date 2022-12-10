import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../component/Layout"
import Product from "../features/product/Product"
import ProductDetails from "../features/product/ProductDetails"
import Loading from "../Loading";

function MyRouter() {
    const Category = React.lazy(() => import('../features/category/Category'));
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={
                        <React.Suspense fallback={<Loading />}>
                            <Category />
                        </React.Suspense>
                    } />
                    <Route path="product/:name" element={<Product />} />
                    <Route path="details/:id" element={<ProductDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default MyRouter