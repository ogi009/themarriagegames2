import React, {useState} from 'react';
import "./_user1.scss"
import User1Pages from "../User1Pages/User1Pages";

const User1 = () => {
    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState(JSON.parse(window.localStorage.getItem('points')));
    window.localStorage.setItem('points', JSON.stringify(counter));


    const handleUserClick = () => {
        setShow(true)
    }
    const handleUserClick2 = () => {
        setShow(false)
    }

    const userLevel = ()=> {
       if (counter < 30) {
           return "Mąż I poziomu"
       }
       else if ( counter < 70) {
           return "Mąż II poziomu"
       }
       else if ( counter < 130) {
           return "Mąż III poziomu"
       }
       else if ( counter < 200) {
           return "Mąż IV poziomu"
       } else {
           return "MASTER"
       }
    }


    if (show === false) {
        return (
            <div onClick={handleUserClick} className="user1_box">
                <div className="user_photo1"></div>
                <div className="user1_info">
                    <h2 className="user1_title">Kuba</h2>
                    <h3 className="user1_level">{userLevel()}</h3>
                    <p className="user1_speciality"> Specjalność: “śmieci”</p>
                    <h1 className="user1_points"> {JSON.parse(window.localStorage.getItem('points'))} ptk.</h1>
                </div>
            </div>
        );
    } else {
        return (
            <div className="user1_box-2">
                <div className="user_details">
                    <div className="user_photo1-2"></div>
                    <div className="user_info-2">
                        <h2 className="user_title-2">Kuba</h2>
                        <h3 className="user_level-2">{userLevel()}</h3>
                        <p className="user_speciality-2"> Specjalność: “śmieci”</p>
                        <h1 className="user_points-2">{JSON.parse(window.localStorage.getItem('points'))} ptk</h1>
                    </div>
                </div>
                <div className="pages_container">
                    <User1Pages counter={counter} setCounter={setCounter}/>
                </div>
                <button onClick={handleUserClick2} className="pages_container-close_button">X</button>
            </div>
        )
    }


};

export default User1;