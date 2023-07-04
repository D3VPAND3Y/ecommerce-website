import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
import PaymentForm from "../payment-form/payment-form.component";

const Checkout = () => {
    const {cartItems} = useContext(CartContext);
    return(
        <div className="checkout-container">
        <div className="checkout-header">
        <div className="header-block">
        <span>Product</span>
        </div>
        <div className="header-block">
        <span>Description</span>
        </div>
        <div className="header-block">
        <span>Quantity</span>
        </div>
        <div className="header-block">
        <span>Price</span>
        </div>
        <div className="header-block">
        <span>Remove</span>
        </div>
        </div>
        {
            cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <span className="total">Total: ${cartItems.reduce((acc,cartItem) => acc + cartItem.price * cartItem.quantity,0)}</span>
        <PaymentForm />
        </div>
    );
}


export default Checkout;