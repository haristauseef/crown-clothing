import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children,isgooglesignIn, inverted, ...otherprops}) => {
    return(
        <button className={` ${inverted ? "inverted" : ""} ${isgooglesignIn ? "google-sign-in": ""} custom-button`} {...otherprops}>
            {children}
        </button>
    )
};

export default CustomButton;