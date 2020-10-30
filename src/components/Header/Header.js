import React from 'react';
import './_header.scss';

const Header = () => {
    return (
        <div className="header_container">
            <div className="header_frame_container">
                <div className="frame_container2">
                    <div className="frame_frame">
                        <h1 className="frame_container-title"><p className="the">THE</p><i className="far fa-heart"></i>MARRIAGE
                            GAMES
                        </h1>
                    </div>
                </div>
            </div>
            <div className="note_container">
                <div className="note1"> O co chodzi?</div>
                <div className="note2">Co można?</div>
                <div className="note3">O autorze</div>
            </div>
            <div className="calendar_container">
                <div>Poniedziałek</div>
                <div><p className="calendar_date">24</p>
                    <p>Września</p></div>
            </div>
            <div className="clock_container">

            </div>
        </div>
    );
};

export default Header;