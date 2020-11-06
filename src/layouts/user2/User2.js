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

    const userSpeciality = () => {
        const dog = JSON.parse(window.localStorage.getItem('dog2'));
        const bin = JSON.parse(window.localStorage.getItem('bin2'));
        const broom = JSON.parse(window.localStorage.getItem('broom2'));
        const sink = JSON.parse(window.localStorage.getItem('sink2'));
        const dinner = JSON.parse(window.localStorage.getItem('dinner2'));

        if (dog >= bin && dog >= broom && dog >= sink && dog >= dinner) {
            return "piesio"
        } else if ( bin >= dog && bin >= broom && bin >= sink && bin >= dinner) {
            return "śmieci"
        }  else if ( broom >= dog && broom >= bin && broom >= sink && broom >= dinner) {
            return "miotła"
        }  else if ( sink >= dog && sink >= broom && sink >= bin && sink >= dinner) {
            return "zmywanie"
        }  else if ( dinner >= dog && dinner >= broom && dinner >= sink && dinner >= bin) {
            return "kucharz"
        }
    }


    if (show === false) {
        return (
            <div onClick={handleUserClick} className="user2_box">
                <div className="user2_photo1"></div>
                <div className="user2_info">
                    <h2 className="user2_title">Asia</h2>
                    <h3 className="user2_level">{userLevel()}</h3>
                    <p className="user2_speciality"> Specjalność: "{userSpeciality()}"</p>
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
                        <h2 className="user2_title-2">Asia</h2>
                        <h3 className="user2_level-2">{userLevel()}</h3>
                        <p className="user2_speciality-2"> Specjalność: "{userSpeciality()}"</p>
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