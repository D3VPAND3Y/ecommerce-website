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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
})

export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false);

    const [cartItems,setCartItems] = useState([]);
    const addItemToCart = (item) => {
        setCartItems(addCartItem(cartItems,item));
    }
    const[cartCount,setCartCount] = useState(0);

    useEffect(()=>{
        setCartCount(cartItems.reduce((acc,cartItem)=>acc+cartItem.quantity,0));
    },[cartItems]);
    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount};
    // const removeItemFromCart = (item) => {
    // }
    // const clearItemFromCart = (item) => {
    //     setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    // }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

