import { Outlet,Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { Fragment,useContext } from "react";
import { UsersContext } from "../../contexts/users.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation =() =>{
    const {currentUser } = useContext(UsersContext);
    // console.log(currentUser);
    const {isCartOpen} = useContext(CartContext);






    return (
        <Fragment>
        <div className="navigation">

        <Link className="logo-container" to="/">
        <Logo className="logo"/>
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to="shop">Shop</Link>
        {/* <Link className="nav-link" to="about">About</Link> */}
        {
            currentUser ? (
                <span className="nav-link" onClick={signOutUser  }>Sign Out</span>
            ) : (
                <Link className="nav-link" to="auth">Sign In</Link>

            )
        }
        <CartIcon />
        </div>
        {
            isCartOpen ? <CartDropdown /> : null
        }
        </div>
        <Outlet />
        </Fragment>

    );
}

export default Navigation;