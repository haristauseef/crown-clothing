import React from "react";
import "./form-input.styles.scss";

const FormInput = ({handleChange, label, ...otherprops}) => {
    console.log(otherprops);
    return(
        <div className="group">
        <input className="form-input" label={label} onChange={handleChange} {...otherprops } />
        {
            label ? (<label className={`${ otherprops.value.length } ? "shrink" : "" form-input-label `}>
                {label}
            </label>) : null
        }
        </div>
    )
}

export default FormInput;