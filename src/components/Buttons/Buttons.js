import React from 'react';
import buttonsStyle from "./ButtonsStyle";
import "./_buttons.scss"

const Buttons = ({show,setShow,show1,setShow1,show2,setShow2,show3,setShow3,setShow4}) => {
    const handleCLick = () => {
        setShow("flex");
        setShow1("none");
        setShow2("none");
        setShow3("none");
        setShow4("none");
    }
    const handleCLick1 = () => {
        setShow("none");
        setShow1("block");
        setShow2("none");
        setShow3("none");
        setShow4("none");
    }
    const handleCLick2 = () => {
        setShow("none");
        setShow1("none");
        setShow2("block");
        setShow3("none");
        setShow4("none");
    }
    const handleCLick3 = () => {
        setShow("none");
        setShow1("none");
        setShow2("none");
        setShow3("block");
        setShow4("none");
    }
    const handleCLick4 = () => {
        setShow("none");
        setShow1("none");
        setShow2("none");
        setShow3("none");
        setShow4("block");
    }

    return (
        <div className="button_container">
            <button onClick={handleCLick} style={buttonsStyle}>Dodaj</button>
            <button onClick={handleCLick1} style={buttonsStyle}>Statystyki</button>
            <button onClick={handleCLick2} style={buttonsStyle}>Szczegóły</button>
            <button onClick={handleCLick3} style={buttonsStyle}>Losuj Film</button>
            <button onClick={handleCLick4} style={buttonsStyle}>Pomysły</button>
        </div>
    )
};

export default Buttons;