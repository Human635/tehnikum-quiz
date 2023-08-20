import React from "react";

export const AppInput = (
    { 
        id, 
        labelText,
        isRequired, 
        type, 
        name, 
        placeholderText,
        pattern,
        errorText,
        onChange
    }
) => {
    return (
        <label className="input-wrapper" htmlFor={id}>
            {labelText}
            <input 
                required={isRequired}
                type={type}
                name={name}
                id={id}
                placeholder={placeholderText}
                pattern={pattern}
                onChange={onChange}
            />
            <span  id="error-message">
                {errorText}
            </span>
        </label>
        
    )
}