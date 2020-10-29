import React from 'react';
import './_homepage.scss';
import Header from "../../components/Header/Header";
import User1 from "../../components/User1/User1";
import User2 from "../../components/user2/User2";

import Frame from "../../components/Frame/Frame";

const HomePage = () => {
    return (
        <div className="main_container">
            <Header/>
            <div className="user_container">
                <Frame/>
                    <User1/>
                    <User2/>
            </div>



        </div>
    );
};

export default HomePage;