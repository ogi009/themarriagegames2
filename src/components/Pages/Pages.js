import React, {useState} from 'react';
import "./_pages.scss"
import "./_buttons.scss"
import buttonsStyle from "../Buttons/ButtonsStyle";

const Pages = ({counter, setCounter}) => {
    const [show, setShow] = useState("none");
    const [show1, setShow1] = useState("none");
    const [show2, setShow2] = useState("none");
    const [show3, setShow3] = useState("none");
    const [dogCounter, setDogCounter] = useState(0);

    const [binCounter, setBinCounter] = useState(0);
    const [broomCounter, setBroomCounter] = useState(0);
    const [sinkCounter, setSinkCounter] = useState(0);
    const [dinnerCounter, setDinnerCounter] = useState(0);
    const [getDate, setGetDate] = useState([]);
    const dogPercent = `${(dogCounter * 100 / (dogCounter + 5)).toFixed(1)}`;
    const binPercent = `${(binCounter * 100 / (binCounter + 5)).toFixed(1)}`;
    const broomPercent = `${(broomCounter * 100 / (broomCounter + 5)).toFixed(1)}`;
    const sinkPercent = `${(sinkCounter * 100 / (sinkCounter + 5)).toFixed(1)}`;

    const dogStaticBarStyle = {
        width: `${dogPercent}%`,
    };
    const binStaticBarStyle = {
        width: `${binPercent}%`,
    };
    const broomStaticBarStyle = {
        width: `${broomPercent}%`,
    };
    const sinkStaticBarStyle = {
        width: `${sinkPercent}%`,
    }

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
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Spacer z Pieskiem!"]);
    };
    const handleAddBinButton = () => {
        setCounter(counter + 1);
        setBinCounter(binCounter + 1);
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Wyrzuciłeś śmieci!"]);

    }
    const handleAddBroomButton = () => {
        setCounter(counter + 1);
        setBroomCounter(broomCounter + 1);
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Zamiotłeś!"]);
    }
    const handleAddSinkButton = () => {
        setCounter(counter + 1);
        setSinkCounter(sinkCounter + 1);
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Zmyłeś naczynia!!"]);
    }
    const handleAddDinnerButton = () => {
        setCounter(counter + 1);
        setDinnerCounter(dinnerCounter + 1);
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Zrobiłeś obiad!"]);
    }

    return (
        <div>
            <div className="button_container">
                <button onClick={handleCLick} style={buttonsStyle}>Dodaj</button>
                <button onClick={handleCLick1} style={buttonsStyle}>Statystyki</button>
                <button onClick={handleCLick2} style={buttonsStyle}>Szczegóły</button>
                <button onClick={handleCLick3} style={buttonsStyle}>Losuj Film</button>
            </div>
            <div style={{display: show}} className="add_container">
                <button className="add_container_buttons"><i onClick={handleAddDogButton} className="fas fa-dog"></i>
                </button>
                <button className="add_container_buttons"><i onClick={handleAddBinButton}
                                                             className="fas fa-trash-alt"></i></button>
                <button className="add_container_buttons"><i onClick={handleAddBroomButton}
                                                             className="fas fa-broom"></i></button>
                <button className="add_container_buttons"><i onClick={handleAddSinkButton} className="fas fa-sink"></i>
                </button>
                <button className="add_container_buttons"><i onClick={handleAddDinnerButton}
                                                             className="fas fa-utensils"></i></button>

            </div>
            <div style={{display: show1}} className="statistic_container">
                <div className="statistic_container-dog" style={{display: "flex", alignItems: "center", padding: "0.5rem"}}>
                    <p className="statistic_container-text">Wychodzenie z psem</p>
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{dogPercent}%</p>
                    <div style={{display: "flex", width: "15rem", marginRight: "0.5rem"}}>
                        <div style={dogStaticBarStyle} className="statistic_bar"></div>
                        <div style={{width: `${100 - dogPercent}%`}} className="statistic_bar2"></div>
                    </div>
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{(100 - dogPercent).toFixed(1)}%</p>
                    <div className="small_user2"></div>
                </div>
                <div className="statistic_container-bin" style={{display: "flex", alignItems: "center", padding: "0.5rem"}}>
                    <p className="statistic_container-text">Wynoszenie śmieci</p>
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{binPercent}%</p>
                    <div style={{display: "flex", width: "15rem", marginRight: "0.5rem"}}>
                        <div style={binStaticBarStyle} className="statistic_bar"></div>
                        <div style={{width: `${100 - binPercent}%`}} className="statistic_bar2"></div>
                    </div>
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{(100 - binPercent).toFixed(1)}%</p>
                    <div className="small_user2"></div>
                </div>
                <div className="statistic_container-broom" style={{display: "flex", alignItems: "center", padding: "0.5rem"}}>
                    <p className="statistic_container-text">Zamiatanie</p>
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{broomPercent}%</p>
                    <div style={{display: "flex", width: "15rem", marginRight: "0.5rem"}}>
                        <div style={broomStaticBarStyle} className="statistic_bar"></div>
                        <div style={{width: `${100 - binPercent}%`}} className="statistic_bar2"></div>
                    </div>
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{(100 - broomPercent).toFixed(1)}%</p>
                    <div className="small_user2"></div>
                </div>
                <div className="statistic_container-sink" style={{display: "flex", alignItems: "center", padding: "0.5rem"}}>
                    <p className="statistic_container-text">Zmywanie</p>
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{sinkPercent}%</p>
                    <div style={{display: "flex", width: "15rem", marginRight: "0.5rem"}}>
                        <div style={sinkStaticBarStyle} className="statistic_bar"></div>
                        <div style={{width: `${100 - sinkPercent}%`}} className="statistic_bar2"></div>
                    </div>
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{(100 - sinkPercent).toFixed(1)}%</p>
                    <div className="small_user2"></div>
                </div>

            </div>
            <div style={{display: show2}} className="details_container">
                <ul>
                    {getDate.map((e, i) => <li className="details_container-list" key={i}>{e} </li>)}
                </ul>

            </div>
            <div style={{display: show3}} className="draw_container"> Romansidło</div>
        </div>
    );
};

export default Pages;