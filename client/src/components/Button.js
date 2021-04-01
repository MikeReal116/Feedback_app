import React from 'react';
import "./Button.css"

export const Button = ({buttonStyle, buttonColor, children, onClick}) =>{
    
    const STYLES = ["primary", "secondary", "outline"];
    const COLOURS = ["white", "purple","black"];

    const setButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
    const setButtonColor = COLOURS.includes(buttonColor) ? buttonColor: COLOURS[0];

    return (
        <button className={`btn ${setButtonStyle} ${setButtonColor}`} onClick={onClick}>
            {children}
        </button>
    )
}
