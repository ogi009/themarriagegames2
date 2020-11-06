import React, {useState} from 'react';
import './_clock.scss'


const Clock = () => {
    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    const [rotateSec, setRotateSec] = useState(360 /60 * sec  + 180);
    const [rotateMin, setRotateMin] = useState(360 /60 * min  + 180);
    const [rotateHour, setRotateHour] = useState(360  / 12 * hour +180);


    const styleSec = {
        height: "6rem",
        width: "0.2rem",
        backgroundColor: "red",
        position: "absolute",
        left: "0.4rem",
        top: "0.3rem",
        transformOrigin: "top left",
        transform: `rotate(${rotateSec}deg)`
    }
    const styleMin = {
        height: "5rem",
        width: "0.2rem",
        backgroundColor: "rgb(79, 76, 77)",
        position: "absolute",
        left: "0.4rem",
        top: "0.3rem",
        transformOrigin: "top left",
        transform: `rotate(${rotateMin}deg)`
    }
    const styleHour = {
        height: "4rem",
        width: "0.2rem",
        backgroundColor: "rgb(79, 76, 77)",
        position: "absolute",
        left: "0.4rem",
        top: "0.3rem",
        transformOrigin: "top left",
        transform: `rotate(${rotateHour}deg)`
    }

    setTimeout(() => {
        setRotateSec(rotateSec + 6);
    }, 1000)
    setTimeout(() => {
        setRotateMin(rotateMin + 6);
    }, 60000)
    setTimeout(() => {
        setRotateHour(rotateHour + 15);
    }, 600000)


    return (
        <div className="clock_container">
            <div className="round">
                <div style={styleSec}></div>
                <div style={styleMin}></div>
                <div style={styleHour}></div>
            </div>
        </div>
    );
};

export default Clock;