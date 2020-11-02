import React, {useState} from 'react';
import "./_pages.scss";
import Buttons from "../Buttons/Buttons";

const Pages = ({counter, setCounter}) => {



    const [show, setShow] = useState("none");
    const [show1, setShow1] = useState("none");
    const [show2, setShow2] = useState("none");
    const [show3, setShow3] = useState("none");

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

    const [getDate, setGetDate] = useState([JSON.parse(window.localStorage.getItem('date'))]);
    window.localStorage.setItem(`date`, JSON.stringify([getDate]));

    const dogPercent = `${(dogCounter * 100 / (dogCounter + 5)).toFixed(1)}`;
    const binPercent = `${(binCounter * 100 / (binCounter + 5)).toFixed(1)}`;
    const broomPercent = `${(broomCounter * 100 / (broomCounter + 5)).toFixed(1)}`;
    const sinkPercent = `${(sinkCounter * 100 / (sinkCounter + 5)).toFixed(1)}`;
    const dinnerPercent = `${(dinnerCounter * 100 / (dinnerCounter + 5)).toFixed(1)}`;



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
    const [movieData, setMovieData] = useState([]);
    const [movieImg, setMovieImg] = useState([]);
    const [movieVote, setMovieVote] = useState([]);
    const [movieDescription, setMovieDescription] = useState([]);
    const [statusMessage, setStatusMessage] = useState([]);
    const handleMovie = () => {

        const movie =  Math.floor(Math.random() * 1200)
        console.log(movie);

        fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=3895cdfbe8f1bab08a6032d003acaf85`, {
            "method": "GET",
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovieData(data.original_title);
                setMovieDescription(data.overview);
                setMovieImg(`https://image.tmdb.org/t/p/w500/${data.poster_path}`);
                setMovieVote(data.vote_average);
                setStatusMessage(data.status_message);
            } )

            .catch(err => {
                console.log(err);
            })
    }

    // const userSpeciality = () => {
    //     if (dogCounter > binCounter && dogCounter > broomCounter && dogCounter > sinkCounter && dogCounter > dinnerCounter){
    //         return "piesio"
    //     } else if (binCounter > dogCounter && binCounter > broomCounter && binCounter > sinkCounter && binCounter > dinnerCounter) {
    //         return "śmieci"
    //     }
    // }

    return (
        <div>
            <Buttons show={show} setShow={setShow} show1={show1} setShow1={setShow1} show2={show2} setShow2={setShow2}
                     show3={show3} setShow3={setShow3}/>

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
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{binPercent}%</p>
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
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{broomPercent}%</p>
                    <div style={{display: "flex", width: "15rem", marginRight: "0.5rem"}}>
                        <div style={broomStaticBarStyle} className="statistic_bar"></div>
                        <div style={{width: `${100 - binPercent}%`}} className="statistic_bar2"></div>
                    </div>
                    <p className="statistic_container-text"
                       style={{marginRight: "0.5rem"}}>{(100 - broomPercent).toFixed(1)}%</p>
                    <div className="small_user2"></div>
                </div>
                <div className="statistic_container-sink"
                     style={{display: "flex", alignItems: "center", padding: "0.5rem"}}>
                    <p style={{marginRight: "1rem"}} className="statistic_container-text">Zmywanie</p>
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{sinkPercent}%</p>
                    <div style={{display: "flex", width: "15rem", marginRight: "0.5rem"}}>
                        <div style={sinkStaticBarStyle} className="statistic_bar"></div>
                        <div style={{width: `${100 - sinkPercent}%`}} className="statistic_bar2"></div>
                    </div>
                    <p className="statistic_container-text"
                       style={{marginRight: "0.5rem"}}>{(100 - sinkPercent).toFixed(1)}%</p>
                    <div className="small_user2"></div>
                </div>
                <div className="statistic_container-dinner"
                     style={{display: "flex", alignItems: "center", padding: "0.5rem"}}>
                    <p style={{marginRight: "1rem"}} className="statistic_container-text">Zrobienie obiadu</p>
                    <p className="statistic_container-text" style={{marginRight: "0.5rem"}}>{dinnerPercent}%</p>
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
                <ul>
                    {getDate.map((e, i) => <li className="details_container-list" key={i}>{e} </li>)}
                </ul>

            </div>
            <div style={{display: show3}} className="draw_container">
                <button className="movie_draw_button" onClick={handleMovie}>Losuj Film</button>
                <div style={{display: "flex"}}>
                    <div style={{backgroundImage: `url(${movieImg})`, width: "5rem", height: "5rem", backgroundSize: "cover"}}></div>
                    <div style={{fontSize: "2rem", color: "orange", marginTop: "0.5rem", textAlign: "center"}}>{(statusMessage === "The resource you requested could not be found.")? "Ups.. Losuj dalej" : movieData}</div>
                </div>
                <div>{movieDescription}</div>
                <div style={{fontSize: "3rem", color: "violet", marginTop: "1rem", textAlign: "center"}}>{movieVote}</div>

            </div>
        </div>
    );
};

export default Pages;