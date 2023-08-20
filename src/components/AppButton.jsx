import React from "react";

export const AppButton = ({ isDisabled, submit, id, buttonText, ...props }) => {
    return (
        <button 
        disabled={isDisabled} 
        type={submit} 
        id={id}
       {...props}
        >
            {buttonText}
        </button>
    )
}