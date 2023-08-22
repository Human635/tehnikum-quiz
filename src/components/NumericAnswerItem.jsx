import React from "react";

export const NumericAnswerItem = ({ id, answerText, isChecked, name, onChange }) => {
    return(
        <li className="variant-wrapper">
        <input 
          required 
          type="radio" 
          name={name} 
          id={id} 
          checked={isChecked} 
          onChange={onChange} 
        />
        <label htmlFor={id}> {answerText} </label>
      </li>
    )
}