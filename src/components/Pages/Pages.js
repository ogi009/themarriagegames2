import React, {useState} from 'react';
import "./_pages.scss"
import "./_buttons.scss"
import buttonsStyle from "../Buttons/ButtonsStyle";

const Pages = () => {

    const [show, setShow] = useState("none");
    const [show1, setShow1] = useState("none");
    const [show2, setShow2] = useState("none");
    const [show3, setShow3] = useState("none");
    const [onClickStyle, setOnClickStyle] = useState("white");

    const handleCLick = () => {
        setShow("flex");
        setShow1("none");
        setShow2("none");
        setShow3("none");
    }
    const handleCLick1 = () => {
        setShow("none");
        setShow1("block");
        setShow2("none");
        setShow3("none");
    }
    const handleCLick2 = () => {
        setShow("none");
        setShow1("none");
        setShow2("block");
        setShow3("none");
    }
    const handleCLick3 = () => {
        setShow("none");
        setShow1("none");
        setShow2("none");
        setShow3("block");
    }
    const handleAddContainerButton = () => {
        setOnClickStyle("red");
        setInterval( () => {
            setOnClickStyle("white")
        },400)
    }
    return (
        <div>
            <div className="button_container">
                <button onClick={handleCLick} style={buttonsStyle}>Dodaj</button>
                <button onClick={handleCLick1} style={buttonsStyle}>Statystyki</button>
                <button  onClick={handleCLick2}style={buttonsStyle}>Szczegóły</button>
                <button onClick={handleCLick3} style={buttonsStyle}>Losuj Film</button>
            </div>
            <div style={{display: show}} className="add_container">
                <button className="add_container_buttons" ><i onClick={handleAddContainerButton} style={{color: onClickStyle}} className="fas fa-dog"></i></button>
                <button className="add_container_buttons"><i className="fas fa-trash-alt"></i></button>
                <button className="add_container_buttons"></button>
                <button className="add_container_buttons"></button>

            </div>
            <div style={{display: show1}} className="statistic_container"> Kuba vs Asia</div>
            <div style={{display: show2}} className="details_container"> Kuba
            Pies:24.25.10</div>
            <div style={{display: show3}} className="draw_container"> Romansidło</div>
        </div>
    );
};

export default Pages;