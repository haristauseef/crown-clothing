import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { ReactComponent as ShoppingIcon} from "../../assests/shopping-bag.svg"
import "./cart-icon.styles.scss";

const CartIcon = ({toggleCartHidden}) => {
    return(
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
            <span className="item-count">0</span>
        </div>
    )
}



export default connect(null, { toggleCartHidden })(CartIcon);