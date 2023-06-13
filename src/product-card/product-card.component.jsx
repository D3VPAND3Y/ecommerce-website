import { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../contexts/cart.context";
import "./product-card.styles.scss";


const ProductCard = ({product}) => {

    const {name,price,imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    const handleClick = () => {
        addItemToCart(product);
    }
    return(

        <div className="product-card-container">
    <img src={imageUrl} alt ={`${name}`}/>
    <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
    <Button onClick={handleClick}>Add to cart</Button>
    </div>
    );

}

export default ProductCard;