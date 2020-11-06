import React from 'react';
import './_calendar.scss';

const Calendar = () => {


        const days = ["niedziela", "poniedziałek"," wtorek", "środa", "czwartek", "piątek", "sobota"]
        const day = new Date().getDay();
        const currentDay = days[day];
        const months = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
        const month = new Date().getMonth();
        const currentMotnh = months[month];



    return (
        <div className="calendar_container">
            <div className="test" style={{textAlign: "center"}}> { new Date().getDate()} {currentMotnh}</div>
            <div style={{color: "red"}}> {currentDay}</div>

        </div>
    );
};

export default Calendar;