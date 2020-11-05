import React, {useState} from 'react';
import './_homepage.scss';
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import Footer from "../Footer/Footer";



const HomePage = () => {

    const [color, setColor] = useState("white");

    const LockStyle = {
        color: color,
        fontSize: "25rem",
        width: "15rem",
        height: "15rem",
        opacity: "0.5"
    }

    const handleClick = () => {
        if ( color === "white") {
            setColor("red")
        } else {
            setColor("white")
        }

    }
    if (window.innerHeight > window.innerWidth) {
        return (
            <div className="lock_container">
                <div className="lock_container-content">
                    <p className="lock_text">Obróć telefon i kliknij kłódkę!</p>
                    <button onClick={handleClick} className="lock_button"><i style={LockStyle} className="fas fa-lock"></i></button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="main_container">
                <Header/>
                <MainPage/>
                <Footer/>
            </div>
        );
    }
};

export default HomePage;