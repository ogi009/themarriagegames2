import React, {useState} from 'react';
import "./_user2.scss"
import Buttons from "../Buttons/Buttons";

const User2 = () => {
    const [show, setShow] = useState(false);
    const handleUserClick = () => {
        setShow(true)
    }
    const handleUserClick2 = () => {
        setShow(false)
    }
    if (show === false) {
        return (
            <div onClick={handleUserClick} className="user2_box">
                <div className="user2_photo2"></div>
                <div className="user2_info">
                    <h2 className="user2_title">Kuba</h2>
                    <h3 className="user2_level">Mąż IV poziomu</h3>
                    <p className="user2_speciality"> Specjalność: “śmieci”</p>
                    <h1 className="user2_points">23 ptk.</h1>
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
                        <h3 className="user2_level-2">Mąż IV poziomu</h3>
                        <p className="user2_speciality-2"> Specjalność: “śmieci”</p>
                        <h1 className="user2_points-2">23</h1>
                    </div>
                </div>
                <div className="pages_container2">
                    <Buttons/>
                </div>
                <button onClick={handleUserClick2} className="pages_container-close_button2">X</button>
            </div>
        )
    }


};

export default User2;