import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);


    return <div className="cart-dropdown-container">
    <div className="cart-items">
    {
        cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
    }


    </div>
    <Button>Checkout</Button>
    </div>
    }

export default CartDropdown;