import React from 'react';
import './_header.scss';
import Logo from "../../components/Logo/Logo";
import Notes from "../../components/Notes/Notes";
import Calendar from "../../components/Calendar/Calendar";
import Clock from "../../components/Clock/Clock";

const Header = () => {
    return (
        <div className="header_container">
           <Logo/>
            <Notes/>
            <Calendar/>
            <Clock/>
        </div>
    );
};

export default Header;