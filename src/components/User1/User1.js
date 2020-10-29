import React, {useState} from 'react';
import "./_user1.scss"
import Buttons from "../Buttons/Buttons";

const User1 = () => {
    const [show, setShow] = useState(false);
    console.log(show);
    const handleClick = () => {
        setShow(true)
    }
    const handleClick2 = () => {
        setShow(false);
    }
    if (show === false) {
        return (
            <div className="user1_box" onClick={handleClick}>
                <div className="user_photo1"></div>
                <div className="user_info">
                    <h2 className="user_title">Kuba</h2>
                    <h3 className="user_level">Mąż IV poziomu</h3>
                    <p className="user_speciality"> Specjalność: “śmieci”</p>
                    <h1 className="user_points">23</h1>
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
                        <h3 className="user_level-2">Mąż IV poziomu</h3>
                        <p className="user_speciality-2"> Specjalność: “śmieci”</p>
                        <h1 className="user_points-2">23</h1>
                    </div>
                </div>
                    <div className="pages_container">
                        <Buttons/>
                    </div>
                <button onClick={handleClick2} style={{background:"none", border:"none",outline:"none", height: "2rem", marginRight:"0.5rem"}}>X</button>
                </div>

        );
    }

};

export default User1;