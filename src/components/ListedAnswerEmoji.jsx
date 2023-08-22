import React from "react";

export const ListedAnswerEmoji = ({ id, src, alt, PPP, isChecked, onChange }) => {
    return(
        <li className="variant-wrapper">
            <input 
                required 
                type="radio" 
                name="variant" 
                id={id} 
                checked={isChecked} 
                onChange={onChange} 
            />
            <label htmlFor={id}>
                <img src={src} alt={alt} />
                <p>{PPP}</p>
            </label>
        </li>
    )
}