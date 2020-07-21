import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({cartItems}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-item">
                {cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />
                )
                }
            </div>
            <CustomButton className="button">Go To Checkout</CustomButton>
        </div>
    )
}

const mapStatetoProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStatetoProps)(CartDropdown);