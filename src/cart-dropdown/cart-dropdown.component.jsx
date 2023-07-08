import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
    const {cartItems,CartProvider} = useContext(CartContext);
    const {setIsCartOpen} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckout = () => {
        setIsCartOpen(false);
        navigate("/checkout");
    }

    return <div className="cart-dropdown-container">
    <div className="cart-items">
    {
        cartItems.length === 0 ? <span className="empty-message">Your cart is empty</span> :
        cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
    }


    </div>
    <Button onClick={goToCheckout}>Checkout</Button>
    </div>
    }

export default CartDropdown;