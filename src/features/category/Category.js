import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchCategoryData } from "./categoryApi";
import { Link } from "react-router-dom"
import categoryStyle from "./style.module.css"

function Category() {

    const { categories } = useSelector(s => s.categoryData)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoryData())
    }, [])

    return (
        <div className={categoryStyle.ol}>
            <h1>Categories</h1>
            <ul>
                {
                    categories.map((ctg, index) => {
                        return (
                            <li key={index}><Link to={"/product/" + ctg}>{ctg}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Category