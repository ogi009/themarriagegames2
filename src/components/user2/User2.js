import React, {useState} from 'react';
import "./_user2.scss"
import User2Pages from "../User2Pages/User2Pages";

const User2 = () => {
    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState(JSON.parse(window.localStorage.getItem('points2')));
    window.localStorage.setItem('points2', JSON.stringify(counter));

    const handleUserClick = () => {
        setShow(true)
    }
    const handleUserClick2 = () => {
        setShow(false)
    }

    const userLevel = ()=> {
        if (counter < 30) {
            return "Żona I poziomu"
        }
        else if ( counter < 70) {
            return "Żona II poziomu"
        }
        else if ( counter < 130) {
            return "Żona III poziomu"
        }
        else if ( counter < 200) {
            return "Żona IV poziomu"
        } else {
            return "MASTER"
        }
    }


    if (show === false) {
        return (
            <div onClick={handleUserClick} className="user2_box">
                <div className="user2_photo1"></div>
                <div className="user2_info">
                    <h2 className="user2_title">Asia</h2>
                    <h3 className="user2_level">{userLevel()}</h3>
                    <p className="user2_speciality"> Specjalność: “piesio”</p>
                    <h1 className="user2_points"> {JSON.parse(window.localStorage.getItem('points2'))} ptk.</h1>
                </div>
            </div>

        );
    } else {
        return (
            <div className="user2_box-2">
                <div className="user2_details">
                    <div className="user2_photo1-2"></div>
                    <div className="user2_info-2">
                        <h2 className="user2_title-2">Kuba</h2>
                        <h3 className="user2_level-2">{userLevel()}</h3>
                        <p className="user2_speciality-2"> Specjalność: “śmieci”</p>
                        <h1 className="user2_points-2">{JSON.parse(window.localStorage.getItem('points2'))} ptk</h1>
                    </div>
                </div>
                <div className="pages_container">
                    <User2Pages counter={counter} setCounter={setCounter}/>
                </div>
                <button onClick={handleUserClick2} className="pages_container-close_button">X</button>
            </div>
        )
    }


};

export default User2;