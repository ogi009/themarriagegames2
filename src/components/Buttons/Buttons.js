import React from 'react';
import buttonsStyle from "./ButtonsStyle";
import "./_buttons.scss"

const Buttons = () => {
    return (
        <div className="button_container">
            <button style={buttonsStyle}>Dodaj</button>
            <button style={buttonsStyle}>Statystyki</button>
            <button style={buttonsStyle}>Szczegóły</button>
            <button style={buttonsStyle}>Losuj Film</button>
        </div>
    );
};

export default Buttons;