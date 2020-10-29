import React from 'react';
import buttonsStyle from "./ButtonsStyle";

const Buttons = () => {
    return (
        <div>
            <button style={buttonsStyle}>Dodaj</button>
            <button style={buttonsStyle}>Statystyki</button>
            <button style={buttonsStyle}>Szczegóły</button>
            <button style={buttonsStyle}>Losuj Film</button>
        </div>
    );
};

export default Buttons;