import React, {useState} from 'react';
import './_mainPage.scss';
import User1 from "../../components/User1/User1";
import User2 from "../../components/user2/User2";


const MainPage = () => {

    const style = {
        width: "30rem",
        height: "25rem"
    };

    return (
        <div className="main_page_container">

            <div className="main_page_container-1" style={style}></div>
            <div className="main_page_container-2" style={style}>
                <User1/>
                <User2/>
            </div>
            <div className="main_page_container-3" style={style}>
            </div>
            <div className="main_page_container-4" style={style}></div>


        </div>
    );
};

export default MainPage;