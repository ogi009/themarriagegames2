import React from 'react';
import "./_user1.scss"

const User1 = () => {


    const handleClick = () => {
        console.log("ok");
    }
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
};

export default User1;