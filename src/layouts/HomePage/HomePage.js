import React from 'react';
import './_homepage.scss';
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import Footer from "../Footer/Footer";

const HomePage = () => {
    return (
        <div className="main_container">
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    );
};

export default HomePage;