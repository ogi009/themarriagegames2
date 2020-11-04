import React, {useState, useEffect} from 'react';
import "./_user1Pages.scss";
import Buttons from "../Buttons/Buttons";
import MoviePage from "../MoviePage/MoviePage";
import User1DetailsPage from "../User1DetailsPage/User1DetailsPage";
import DateListUser1 from "../DateListUser1/DateListUser1";

const User1Pages = ({counter, setCounter}) => {

    const [show, setShow] = useState("none");
    const [show1, setShow1] = useState("none");
    const [show2, setShow2] = useState("none");
    const [show3, setShow3] = useState("none");
    const [show4, setShow4] = useState("none");

    const [dogCounter, setDogCounter] = useState(JSON.parse(window.localStorage.getItem('dog')));
    window.localStorage.setItem(`dog`, JSON.stringify(dogCounter));
    const [binCounter, setBinCounter] = useState(JSON.parse(window.localStorage.getItem('bin')));
    window.localStorage.setItem(`bin`, JSON.stringify(binCounter));
    const [broomCounter, setBroomCounter] = useState(JSON.parse(window.localStorage.getItem('broom')));
    window.localStorage.setItem(`broom`, JSON.stringify(broomCounter));
    const [sinkCounter, setSinkCounter] = useState(JSON.parse(window.localStorage.getItem('sink')));
    window.localStorage.setItem(`sink`, JSON.stringify(sinkCounter));
    const [dinnerCounter, setDinnerCounter] = useState(JSON.parse(window.localStorage.getItem('dinner')));
    window.localStorage.setItem(`dinner`, JSON.stringify(dinnerCounter));

    const [getDate, setGetDate] = useState([]);

    useEffect( () => {
        if (window.localStorage.getItem(`date`) !== null)  {
            setGetDate(JSON.parse(window.localStorage.getItem(`date`)));
        }
    },[])



    const dogPercent = `${(dogCounter * 100 / (dogCounter + JSON.parse(window.localStorage.getItem('dog2')))).toFixed(1)}`;
    const binPercent = `${(binCounter * 100 / (binCounter + JSON.parse(window.localStorage.getItem('bin2')))).toFixed(1)}`;
    const broomPercent = `${(broomCounter * 100 / (broomCounter + JSON.parse(window.localStorage.getItem('broom2')))).toFixed(1)}`;
    const sinkPercent = `${(sinkCounter * 100 / (sinkCounter + JSON.parse(window.localStorage.getItem('sink2')))).toFixed(1)}`;
    const dinnerPercent = `${(dinnerCounter * 100 / (dinnerCounter + JSON.parse(window.localStorage.getItem('dinner2')))).toFixed(1)}`;

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
    const dinnerStaticBarStyle = {
        width: `${dinnerPercent}%`,
    }

    const handleAddDogButton = () => {
        setDogCounter(dogCounter + 1);
        setCounter(counter + 1);
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Spacer z Pieskiem!"]);
        window.localStorage.setItem(`date`, JSON.stringify([...getDate]));
    };
    const handleAddBinButton = () => {
        setCounter(counter + 1);
        setBinCounter(binCounter + 1);
        window.localStorage.setItem(`date`, JSON.stringify([...getDate]));
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Wyrzuciłeś śmieci!"]);

    }
    const handleAddBroomButton = () => {
        setCounter(counter + 1);
        setBroomCounter(broomCounter + 1);
        window.localStorage.setItem(`date`, JSON.stringify([...getDate]));
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Zamiotłeś!"]);
    }
    const handleAddSinkButton = () => {
        setCounter(counter + 1);
        setSinkCounter(sinkCounter + 1);
        window.localStorage.setItem(`date`, JSON.stringify([...getDate]));
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Zmyłeś naczynia!!"]);
    }
    const handleAddDinnerButton = () => {
        setCounter(counter + 1);
        setDinnerCounter(dinnerCounter + 1);
        window.localStorage.setItem(`date`, JSON.stringify([...getDate]));
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Zrobiłeś obiad!"]);
    }

    return (
        <div>
            <Buttons show={show} setShow={setShow} show1={show1} setShow1={setShow1} show2={show2} setShow2={setShow2}
                     show3={show3} setShow3={setShow3} show4={show4} setShow4={setShow4}/>

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
                <div className="statistic_container-dog"
                     style={{display: "flex", alignItems: "center", padding: "0.5rem"}}>
                    <p className="statistic_container-text">Wychodzenie z psem</p>
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{dogPercent}%</p>
                    <div style={{display: "flex", width: "15rem", marginRight: "0.5rem"}}>
                        <div style={dogStaticBarStyle} className="statistic_bar"></div>
                        <div style={{width: `${100 - dogPercent}%`}} className="statistic_bar2"></div>
                    </div>
                    <p className="statistic_container-text"
                       style={{marginRight: "0.5rem"}}>{(100 - dogPercent).toFixed(1)}%</p>
                    <div className="small_user2"></div>
                </div>
                <div className="statistic_container-bin"
                     style={{display: "flex", alignItems: "center", padding: "0.5rem"}}>
                    <p className="statistic_container-text">Wynoszenie śmieci</p>
                    <p className="statistic_container-text"
                       style={{marginRight: "0.5rem", marginLeft: "0.3rem"}}>{binPercent}%</p>
                    <div style={{display: "flex", width: "15rem", marginRight: "0.5rem"}}>
                        <div style={binStaticBarStyle} className="statistic_bar"></div>
                        <div style={{width: `${100 - binPercent}%`}} className="statistic_bar2"></div>
                    </div>
                    <p className="statistic_container-text"
                       style={{marginRight: "0.5rem"}}>{(100 - binPercent).toFixed(1)}%</p>
                    <div className="small_user2"></div>
                </div>
                <div className="statistic_container-broom"
                     style={{display: "flex", alignItems: "center", padding: "0.5rem"}}>
                    <p style={{marginRight: "1rem"}} className="statistic_container-text">Zamiatanie </p>
                    <p className="statistic_container-text" style={{marginRight: "0.3rem"}}>{broomPercent}%</p>
                    <div style={{display: "flex", width: "15rem", marginRight: "0.5rem"}}>
                        <div style={broomStaticBarStyle} className="statistic_bar"></div>
                        <div style={{width: `${100 - broomPercent}%`}} className="statistic_bar2"></div>
                    </div>
                    <p className="statistic_container-text"
                       style={{marginRight: "0.5rem"}}>{(100 - broomPercent).toFixed(1)}%</p>
                    <div className="small_user2"></div>
                </div>
                <div className="statistic_container-sink"
                     style={{display: "flex", alignItems: "center", padding: "0.5rem"}}>
                    <p style={{marginRight: "1rem"}} className="statistic_container-text">Zmywanie</p>
                    <p className="statistic_container-text">{sinkPercent}%</p>
                    <div style={{display: "flex", width: "15rem", marginRight: "0.8rem"}}>
                        <div style={sinkStaticBarStyle} className="statistic_bar"></div>
                        <div style={{width: `${100 - sinkPercent}%`}} className="statistic_bar2"></div>
                    </div>
                    <p className="statistic_container-text"
                    >{(100 - sinkPercent).toFixed(1)}%</p>
                    <div className="small_user2"></div>
                </div>
                <div className="statistic_container-dinner"
                     style={{display: "flex", alignItems: "center", padding: "0.5rem"}}>
                    <p style={{marginRight: "1rem"}} className="statistic_container-text">Zrobienie obiadu</p>
                    <p className="statistic_container-text" style={{marginRight: "0.3rem"}}>{dinnerPercent}%</p>
                    <div style={{display: "flex", width: "15rem", marginRight: "0.5rem"}}>
                        <div style={dinnerStaticBarStyle} className="statistic_bar"></div>
                        <div style={{width: `${100 - dinnerPercent}%`}} className="statistic_bar2"></div>
                    </div>
                    <p className="statistic_container-text"
                       style={{marginRight: "0.5rem"}}>{(100 - dinnerPercent).toFixed(1)}%</p>
                    <div className="small_user2"></div>
                </div>

            </div>
            <div style={{display: show2}} className="details_container">
                <User1DetailsPage props={getDate}/>
            </div>
            <div style={{display: show3, margin: "1rem"}} className="draw_container">
                <MoviePage/>
            </div>
            <div style={{display: show4, margin: "1rem"}} className="date_container">
                <DateListUser1 setCounter={setCounter} counter={counter}/>
            </div>
        </div>
    );
};

export default User1Pages;