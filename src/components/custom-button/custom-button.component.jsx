import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children,isgooglesignIn, ...otherprops}) => {
    return(
        <button className={`${isgooglesignIn ? "google-sign-in": ""} custom-button`} {...otherprops}>
            {children}
        </button>
    )
};

export default CustomButton;