import { Zoom } from 'react-slideshow-image';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchDetailsData } from './productApi';
import ReactStars from "react-rating-stars-component";
import styleDetails from "./style.module.css"
import 'react-slideshow-image/dist/styles.css'


function ProductDetails() {
    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDetailsData(id))
    }, [])


    const { product } = useSelector(s => s.productsData)
    console.log(product);

    return (
        <>
            <div className={styleDetails.details}>
                <div>
                    <div>
                        <h1>{product.title}</h1>
                        <h1>Brand: <b>{product.brand}</b></h1>
                        <h1>Category: <b>{product.category}</b></h1>
                        <h1>Id: <b>{product.id}</b></h1>
                        <h1>Description: <b>{product.description}</b></h1>
                        <h1>Price: <b>{product.price}</b> $</h1>
                    </div>
                    <img src={product.thumbnail} height={400} width={"40%"} />
                </div>
                <div className="slide-container" style={{ width: "60%", height: "500px" }}>
                    {product.images && <Zoom scale={0.4} >
                        {
                            product.images.map((each, index) => <img key={index} style={{ width: "100%", height: "500px" }} src={each} />)
                        }
                    </Zoom>}
                </div>
                {
                    product.rating && <ReactStars
                        count={5}
                        value={product.rating}
                        size={50}
                        activeColor="#ffd700"
                    />
                }
            </div>
        </>
    )
}
export default ProductDetails