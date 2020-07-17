import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assests/crown.svg"
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, hidden}) => {
    return(
        <div className="header">
            <Link to="/" className="logo-container">
            <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/shop">
                    Contact
                </Link>
                {currentUser ?
                    <Link className="option" onClick={() => auth.signOut()}>Sign Out</Link> : 
                    <Link className="option" to="/signup">Sign In</Link>
                }
                <CartIcon />
            </div>
            {!hidden ? <CartDropdown /> : null }
        </div>
    )
};

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header);