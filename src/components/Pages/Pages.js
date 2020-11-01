import React, {useState} from 'react';
import "./_pages.scss"
import "./_buttons.scss"
import buttonsStyle from "../Buttons/ButtonsStyle";

const Pages = ({counter, setCounter}) => {
    console.log(counter);
    const [show, setShow] = useState("none");
    const [show1, setShow1] = useState("none");
    const [show2, setShow2] = useState("none");
    const [show3, setShow3] = useState("none");
    const [dogCounter, setDogCounter] = useState(0);
    const [binCounter, setBinCounter] = useState(0);
    const [broomCounter, setBroomCounter] = useState(0);
    const [sinkCounter, setSinkCounter] = useState(0);
    const [carCounter, setCarCounter] = useState(0);
    const [dinnerCounter, setDinnerCounter] = useState(0);
    const [getDate, setGetDate] = useState([]);

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
    const handleAddDogButton = () => {
        setCounter(counter + 1);
        setDogCounter(dogCounter + 1);
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " +new Date().toLocaleTimeString() + " : Spacer z Pieskiem!"]);
    };
    const handleAddBinButton = () => {
        setCounter(counter + 1);
        setBinCounter(binCounter +1);
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " +new Date().toLocaleTimeString() + " : Wyrzuciłeś śmieci!"]);

    }
    const handleAddBroomButton = () => {
        setCounter(counter + 1);
        setBroomCounter(broomCounter + 1);
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " +new Date().toLocaleTimeString() + " : Zamiotłeś!"]);
    }
    const handleAddSinkButton = () => {
        setCounter(counter + 1);
        setSinkCounter(sinkCounter + 1);
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " +new Date().toLocaleTimeString() + " : Zmyłeś naczynia!!"]);
    }
    const handleAddDinnerButton = () => {
        setCounter(counter + 1);
        setDinnerCounter(dinnerCounter + 1);
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " +new Date().toLocaleTimeString() + " : Zrobiłeś obiad!"]);
    }

    return (
        <div>
            <div className="button_container">
                <button  onClick={handleCLick} style={buttonsStyle}>Dodaj</button>
                <button onClick={handleCLick1} style={buttonsStyle}>Statystyki</button>
                <button  onClick={handleCLick2} style={buttonsStyle}>Szczegóły</button>
                <button onClick={handleCLick3} style={buttonsStyle}>Losuj Film</button>
            </div>
            <div style={{display: show}} className="add_container">
                <button className="add_container_buttons" ><i onClick={handleAddDogButton} className="fas fa-dog"></i></button>
                <button className="add_container_buttons"><i onClick={handleAddBinButton}  className="fas fa-trash-alt"></i></button>
                <button className="add_container_buttons"><i onClick={handleAddBroomButton}  className="fas fa-broom"></i></button>
                <button className="add_container_buttons"><i  onClick={handleAddSinkButton} className="fas fa-sink"></i></button>
                <button className="add_container_buttons"><i onClick={handleAddDinnerButton} className="fas fa-utensils"></i></button>

            </div>
            <div style={{display: show1}} className="statistic_container">
                <div style={{display: "flex"}}>
                    <p>Wychodzenie z psem</p>
                    <div style={{display: "flex", width: "15rem"}}>
                        <div className="statistic_bar"></div>
                        <div className="statistic_bar2"></div>
                    </div>
                    <div className="small_user2"></div>
                </div>

            </div>
            <div style={{display: show2}} className="details_container">
                <ul>
                    {getDate.map((e,i)=> <li className="details_container-list" key={i}>{e} </li>)}
                </ul>

            </div>
            <div style={{display: show3}} className="draw_container"> Romansidło</div>
        </div>
    );
};

export default Pages;