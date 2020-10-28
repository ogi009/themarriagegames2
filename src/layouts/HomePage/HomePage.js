import React from 'react';
import './_homepage.scss';
import Header from "../../components/Header/Header";
import User1 from "../../components/User1/User1";
import User2 from "../../components/user2/User2";
import Greeting from "../../components/greeting/Greeting";

const HomePage = () => {
    return (
        <div className="main_container">
            <Header/>
            <div className="user_container">
                    <User1/>
                    <Greeting/>
                    <User2/>
            </div>



        </div>
    );
};

export default HomePage;