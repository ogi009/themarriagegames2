import React, {useState} from 'react';
import './_notes.scss';
import  BackgroundImage from "../../images/me1.jpg";
import  BackgroundImage2 from "../../images/me2.jpg";
import  BackgroundImage3 from "../../images/me3.jpg";


const Notes = () => {
    const [note1, setNote1] = useState("O mnie");
    const [note2, setNote2] = useState("Kontakt");
    const [note3, setNote3] = useState("O co chodzi");
    const [pic, setPic] = useState(BackgroundImage3);
    const [show, setShow] = useState(false);

    const note1Style = {
        height: "10rem",
        width: "13rem",
        backgroundImage: `url(${pic})`,
         backgroundSize: "cover",
    }
    const sendMailStyle = {
        width: "12rem",
        height: "12rem",
        backgroundColor: "rgb(248, 194, 74)",
        boxShadow: "9px 10px 5px 0 rgba(0, 0, 0, 0.75)",
        marginTop: "4rem",
        transform: "scale(1.2)",
    }

    const handleCLick = () => {
        setNote1(
            <div style={note1Style}></div>
        )
        if (pic === BackgroundImage3) {
            setPic(BackgroundImage2)
        } else if (pic === BackgroundImage2) {
            setPic(BackgroundImage);
        } else {
            setPic(BackgroundImage3)
        }
    }
    const onMouseEnter = () =>{
            setNote1(<div><
                div>Nazywam się Kuba. Jestem emerytowanym zawodnikiem Kitesurfingu, który zaczyna przygodę z Reactem;)</div>
                    <div style={{color: "red", fontSize: "1.5rem", marginTop: "0.2rem", textAlign: "center"}}> Chcesz Mnie zobaczyć KLINKIJ!</div>
            </div>)
    }
    const onMouseLeave = () => {
        setNote1("O mnie");
    }
    const onMouseEnter2 = () =>{
            setNote2(<div style={{padding: "1rem"}}>
                <p style={{color: "red", fontSize:" 2rem",textAlign: "center", marginTop: "3rem"}}>Napisz do mnie!</p>
            </div>)
    }
    const onMouseLeave2 = () => {
        setNote2("Kontakt");
    }
    const onMouseEnter3 = () =>{
            setNote3(<div>
                <p>Od wieki wieków toczy się spóro to kto? Kto więcej wychodzi z pesem, wynosi śmieci, itp.</p>
                <p style={{color:"red", fontSize: "1.2rem", fontWeight: "bold"}}> Postanowiłem się tym zająć i oto rozwiązanie dla wszystkich słóconych par!!</p>
            </div>)
    }
    const onMouseLeave3 = () => {
        setNote3("O co chodzi");
    }
    const handleMail = () => {
       setShow(true)
    }
    const handleMail2 = () => {
        setShow(false)
        console.log(show);
    }
    if ( show === false) {
        return (
            <div className="note_container">
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handleCLick} className="note1">{note1}</div>
                <div onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2} onClick={handleMail} className="note2">{note2}</div>
                <div onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}  className="note3">{note3}</div>
            </div>
        )
    } else {
        return (
            <div style={sendMailStyle} className="send_mail">
            <form action="mailto:ogi009@poczta.onet.pl" method="post">
                <input placeholder="Imię"/>
                <input placeholder="Nazwisko"/>
                <input placeholder="email"/>
                <input placeholder="treść wiadomości"/>
                <button>Wyślij</button>
            </form>
                <button style={{marginTop: "1rem", marginLeft: "8rem"}} onClick={handleMail2}>Zamknij</button>
            </div>
        )
            }

};

export default Notes;