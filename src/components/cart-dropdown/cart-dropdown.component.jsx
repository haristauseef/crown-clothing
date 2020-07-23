import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { createStructuredSelector} from "reselect";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropdown = ({cartItems, history, dispatch}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-item">
                { cartItems.length ? cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />
                ) :
                <span className="empty-message">Cart is empty</span>
                }
            </div>
            <CustomButton className="button" onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }
            }>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStatetoProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStatetoProps)(CartDropdown));