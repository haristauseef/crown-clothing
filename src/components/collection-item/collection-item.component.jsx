import React from "react";
import { connect } from "react-redux";
import "./collection-item.styles.scss";
import { addItem } from "../../redux/cart/cart-actions";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({item, addItem}) => {
    console.log("this is from collection item",item);
    const {name, price, imageUrl} = item;
    return(
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>Add to Cart</CustomButton> 
        </div>
    )
};

export default connect(null, {addItem})(CollectionItem);