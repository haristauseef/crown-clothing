import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = props => {
    return(
        <div className="cart-dropdown">
            <div className="cart-item"></div>
            <CustomButton className="button">Go To Checkout</CustomButton>
        </div>
    )
}

export default CartDropdown;