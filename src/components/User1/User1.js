import React, {useState} from 'react';
import "./_user1.scss"
import Buttons from "../Buttons/Buttons";

const User1 = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
    }
    if (click === false) {
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
            <div className="user1_box-2" onClick={handleClick}>
                <div>
                    <div className="user_photo1-2"></div>
                    <div className="user_info-2">
                        <h2 className="user_title-2">Kuba</h2>
                        <h3 className="user_level-2">Mąż IV poziomu</h3>
                        <p className="user_speciality-2"> Specjalność: “śmieci”</p>
                        <h1 className="user_points-2">23</h1>
                    </div>
                </div>
                    <div>
                        <Buttons/>
                    </div>
                </div>

        );
    }

};

export default User1;