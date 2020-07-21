import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

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
    cartItems: state.cart.cartItems
})

export default connect(mapStatetoProps)(CartDropdown);