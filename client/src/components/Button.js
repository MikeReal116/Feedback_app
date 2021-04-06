import React from 'react';
import "./Button.css"

export const Button = ({buttonStyle, buttonColor, children, onClick, type}) =>{
    
    const STYLES = ["primary", "secondary", "outline", "none"];
    const COLOURS = ["white", "purple","black", "green"];

    const setButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
    const setButtonColor = COLOURS.includes(buttonColor) ? buttonColor: COLOURS[0];

    return (
        <button className={`btn ${setButtonStyle} ${setButtonColor}`} onClick={onClick} type ={type}>
            {children}
        </button>
    )
}
