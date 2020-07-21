import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { ReactComponent as ShoppingIcon} from "../../assests/shopping-bag.svg"
import "./cart-icon.styles.scss";
import { cartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartHidden, itemsCount}) => {
    return(
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
            <span className="item-count">{itemsCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemsCount : cartItemsCount(state)

})

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);