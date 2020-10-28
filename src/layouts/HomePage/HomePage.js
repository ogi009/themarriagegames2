import React from 'react';
import './_homepage.scss';
import Header from "../../components/Header/Header";
import User1 from "../../components/User1/User1";

const HomePage = () => {
    return (
        <div className="main_container">
            <Header/>
            <div className="user_container">
                    <User1/>
            </div>



        </div>
    );
};

export default HomePage;