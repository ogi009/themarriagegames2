import React, {useState, useEffect} from 'react';
import './_mainPage.scss';
import User1 from "../../components/User1/User1";
import User2 from "../../components/user2/User2";


const MainPage = () => {

    const style = {
        width: "30rem",
        height: "25rem"
    };
    const [showUser1, setShowUser1] = useState(true);
    const [showUser2, setShowUser2] = useState(true);


    const handleCLick1 = () => {
        setShowUser1(false);
    }
    const handleCLick2 = () => {
        setShowUser2(false);
    }
    return (
        <div className="main_page_container">

            <div className="main_page_container-1" style={style}></div>
            <div className="main_page_container-2" style={style}>
                <div onClick={handleCLick1}> {showUser2 ? <User1/> : ""}</div>
                <div onClick={handleCLick2}> {showUser1 ? <User2/> : ""}</div>
            </div>
            <div className="main_page_container-3" style={style}>
            </div>
            <div className="main_page_container-4" style={style}></div>


        </div>
    );
};

export default MainPage;