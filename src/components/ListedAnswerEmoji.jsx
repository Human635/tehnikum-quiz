import React from "react";

export const ListedAnswerEmoji = ({ id, src, alt, PPP}) => {
    return(
        <li className="variant-wrapper">
            <input required type="radio" name="variant" id={id} />
            <label htmlFor={id}>
                <img src={src} alt={alt} />
                <p>{PPP}</p>
            </label>
        </li>
    )
}