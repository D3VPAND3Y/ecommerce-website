import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <span>
        <Link to={`/shop/${title.toLowerCase()}`} className="title">
          {title}
        </Link>
      </span>
      <div className="preview">
        {products
          .filter((product, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};


export default CategoryPreview;