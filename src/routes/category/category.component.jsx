
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext } from "react";
import { useEffect, useState } from "react";
import ProductCard from "../../product-card/product-card.component";
import "./category.styles.scss";

const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const[products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }
    , [categoriesMap, category]);
    return (
        <>

        <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className="category-container-shop">
        {
            products && products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))

        }
        </div>
        </>
    )
}

export default Category;