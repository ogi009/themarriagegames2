import React, {useState, useEffect} from 'react';
import "./_user2Pages.scss";
import Buttons from "../Buttons/Buttons";
import MoviePage from "../MoviePage/MoviePage";
import User2DetailsPage from "../User2DetailPage/User2DetailPage";

const User2Pages = ({counter, setCounter}) => {

    const [show, setShow] = useState("none");
    const [show1, setShow1] = useState("none");
    const [show2, setShow2] = useState("none");
    const [show3, setShow3] = useState("none");
    const [show4, setShow4] = useState("none");

    const [dogCounter, setDogCounter] = useState(JSON.parse(window.localStorage.getItem('dog2')));
    window.localStorage.setItem(`dog2`, JSON.stringify(dogCounter));
    const [binCounter, setBinCounter] = useState(JSON.parse(window.localStorage.getItem('bin2')));
    window.localStorage.setItem(`bin2`, JSON.stringify(binCounter));
    const [broomCounter, setBroomCounter] = useState(JSON.parse(window.localStorage.getItem('broom2')));
    window.localStorage.setItem(`broom2`, JSON.stringify(broomCounter));
    const [sinkCounter, setSinkCounter] = useState(JSON.parse(window.localStorage.getItem('sink2')));
    window.localStorage.setItem(`sink2`, JSON.stringify(sinkCounter));
    const [dinnerCounter, setDinnerCounter] = useState(JSON.parse(window.localStorage.getItem('dinner2')));
    window.localStorage.setItem(`dinner2`, JSON.stringify(dinnerCounter));

    const [getDate, setGetDate] = useState([]);
    useEffect( () => {
        if (window.localStorage.getItem(`date2`) !== null)  {
            setGetDate(JSON.parse(window.localStorage.getItem(`date2`)));
        }
    },[])

    const dogPercent = `${(dogCounter * 100 / (dogCounter + JSON.parse(window.localStorage.getItem('dog')))).toFixed(1)}`;
    const binPercent = `${(binCounter * 100 / (binCounter + JSON.parse(window.localStorage.getItem('bin')))).toFixed(1)}`;
    const broomPercent = `${(broomCounter * 100 / (broomCounter + JSON.parse(window.localStorage.getItem('broom')))).toFixed(1)}`;
    const sinkPercent = `${(sinkCounter * 100 / (sinkCounter + JSON.parse(window.localStorage.getItem('sink')))).toFixed(1)}`;
    const dinnerPercent = `${(dinnerCounter * 100 / (dinnerCounter + JSON.parse(window.localStorage.getItem('dinner')))).toFixed(1)}`;

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
        setCounter(counter + 1);
        setDogCounter(dogCounter + 1);
        window.localStorage.setItem(`date2`, JSON.stringify([...getDate]));
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Spacer z Pieskiem!"]);
    };
    const handleAddBinButton = () => {
        setCounter(counter + 1);
        setBinCounter(binCounter + 1);
        window.localStorage.setItem(`date2`, JSON.stringify([...getDate]));
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Wyrzuciłeś śmieci!"]);

    }
    const handleAddBroomButton = () => {
        setCounter(counter + 1);
        setBroomCounter(broomCounter + 1);
        window.localStorage.setItem(`date2`, JSON.stringify([...getDate]));
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Zamiotłeś!"]);
    }
    const handleAddSinkButton = () => {
        setCounter(counter + 1);
        setSinkCounter(sinkCounter + 1);
        window.localStorage.setItem(`date2`, JSON.stringify([...getDate]));
        setGetDate([...getDate, new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString() + " : Zmyłeś naczynia!!"]);
    }
    const handleAddDinnerButton = () => {
        setCounter(counter + 1);
        setDinnerCounter(dinnerCounter + 1);
        window.localStorage.setItem(`date2`, JSON.stringify([...getDate]));
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
                    <div className="small_user1"></div>
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
                    <div className="small_user1"></div>
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
                    <div className="small_user1"></div>
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
                    <div className="small_user1"></div>
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
                    <div className="small_user1"></div>
                </div>

            </div>
            <div style={{display: show2}} className="details_container">
                <User2DetailsPage props={getDate}/>
            </div>
            <div style={{display: show3, margin: "1rem"}} className="draw_container">
                <MoviePage/>
            </div>
            <div style={{display: show4, margin: "1rem"}} className="idea_container">
               <div>Kupsko</div>
            </div>
        </div>
    );
};

export default User2Pages;