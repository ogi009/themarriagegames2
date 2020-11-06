import React, {useState, useEffect} from 'react';
import "./_dateListUser2.scss"

const DateListUser2 = ({counter, setCounter}) => {
    const [dateArray, setDateArray] = useState([]);
    const [date, setDate] = useState("");


    useEffect(() => {
        if (window.localStorage.getItem(`ideas2`) !== null) {
            setDateArray(JSON.parse(window.localStorage.getItem(`ideas2`)));
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDate = {
            id: dateArray.length + 1,
            name: date,
            done: false,
        }
        setDateArray(prevDate => [...prevDate, newDate]);
        window.localStorage.setItem(`ideas2`, JSON.stringify([...dateArray,newDate ]));
        setDate("");
    }
    const handleClick = (taskID) => {
        const stateCopy = [...dateArray];

        stateCopy.forEach(e => {
            setCounter(counter + 3)
            if (e.id === taskID) {
                e.done = true;
            } else if (e.done === true) {

            }
        });
        setDateArray(stateCopy);
    }
    const handleResetClick = () => {
        window.localStorage.removeItem(`ideas2`);
    }
    return (
        <div className="idea_list">
            <form className="header" onSubmit={handleSubmit}>
                <h1 style={{margin: "1rem"}}>Pomysły na randkę!</h1>
                <input type="text" placeholder="np. Kupić kwiaty" value={date}
                       onChange={(e) => setDate(e.target.value)}/>
                <button disabled={date === ""} style={{color: date === "" ? "white" : "#555"}}
                        className="btn-add">Dodaj
                </button>
            </form>

            <ul style={{margin: "1rem"}}>
                {dateArray.map(e =>
                    <li onClick={() => handleClick(e.id)}
                        style={{margin: "1rem", textAlign: "left", listStyle: "decimal"}} key={e.id}
                        className={e.done ? "done" : ""}>{e.name}</li>)}
            </ul>
            <button onClick={handleResetClick} className="btn-add2">Reset</button>
        </div>
    )
};

export default DateListUser2;