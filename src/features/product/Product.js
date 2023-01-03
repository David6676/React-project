import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchProductData, fetchSearchData } from "./productApi"
import { useParams, Link } from "react-router-dom"
import productStyle from "./style.module.css"

function Product() {
    const { products } = useSelector(s => s.productsData)

    const dispatch = useDispatch()

    let { name } = useParams()

    useEffect(() => {
        dispatch(fetchProductData(name))
    }, [])


    return (
        <>
            <input type="text"
                placeholder="Search..."
                onChange={(e) => {
                    dispatch(fetchSearchData(e.target.value))
                }} />
            {
                products.map((product, index) => {
                    return (
                        <div key={index} className={productStyle.div}>
                            <img src={product.thumbnail} alt="" width={200} height={200} />
                            <h1><Link to={'/details/' + product.id}>{product.title}</Link></h1>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Product