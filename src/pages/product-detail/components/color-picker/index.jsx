import React from "react";
import "./color-picker.css";

const ColorPicker = (props) => {
    const { color, colorName , active } = props;
    // const { color, active } = props;

    return (
        <div className="color-picker-body">
            <div className="color-picker-main " style={{ backgroundColor: color }}></div>
            <div className={`color-picker-text ${ active ? "pink-text" : ""}`}>{colorName}</div>
        </div>
    )
}

export default ColorPicker;