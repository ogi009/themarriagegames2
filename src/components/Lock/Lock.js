import React from 'react';
import "./_lockButton.scss"


const Lock = ({color,setColor,props}) => {



    const LockStyle = {
        color: color,
        fontSize: "25rem",
        width: "15rem",
        height: "15rem",
        opacity: "0.5"
    }


    return (
        <div className="lock_container">
            <div className="lock_container-content">
                <p className="lock_text">Obróć telefon i kliknij kłodkę!</p>
                <button onClick={props} className="lock_button"><i style={LockStyle} className="fas fa-lock"></i></button>
            </div>
        </div>
    );
};

export default Lock;