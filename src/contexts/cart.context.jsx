import { createContext,useState,useEffect } from "react";

const addCartItem = (cartItems,item) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === item.id ? {...cartItem,quantity:cartItem.quantity+1} : cartItem
        );
    }
    return [...cartItems,{...item,quantity:1}];
}

const removeCartItem = (cartItems,item) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== item.id);
    }
    return cartItems.map(cartItem =>
        cartItem.id === item.id ? {...cartItem,quantity:cartItem.quantity-1} : cartItem
    );
}

const clearCartItem = (cartItems,item) => {
    return cartItems.filter(cartItem => cartItem.id !== item.id);
}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false);

    const [cartItems,setCartItems] = useState([]);
    const addItemToCart = (item) => {
        setCartItems(addCartItem(cartItems,item));
    }
    const removeItemFromCart = (item) => {
        setCartItems(removeCartItem(cartItems,item));
    }
    const clearItemFromCart = (item) => {
        setCartItems(clearCartItem(cartItems,item));
    }

    const[cartCount,setCartCount] = useState(0);

    useEffect(()=>{
        setCartCount(cartItems.reduce((acc,cartItem)=>acc+cartItem.quantity,0));
    },[cartItems]);
    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount,removeItemFromCart,clearItemFromCart};
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

