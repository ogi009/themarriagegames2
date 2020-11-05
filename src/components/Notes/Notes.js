import React, {useState} from 'react';
import './_notes.scss';
import BackgroundImage from "../../images/me1.jpg";
import BackgroundImage2 from "../../images/me2.jpg";
import BackgroundImage3 from "../../images/me3.jpg";


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
    const contactStyle = {
        width: "12rem",
        height: "12rem",
        backgroundColor: "rgb(248, 194, 74)",
        boxShadow: "9px 10px 5px 0 rgba(0, 0, 0, 0.75)",
        marginTop: "4rem",
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
    const onMouseEnter = () => {
        setNote1(<div>
            <div>Nazywam się Kuba. Jestem emerytowanym zawodnikiem Kitesurfingu, który zaczyna przygodę z Reactem;)
            </div>
            <div style={{color: "red", fontSize: "1.5rem", marginTop: "0.2rem", textAlign: "center"}}> Chcesz Mnie
                zobaczyć KLINKIJ!
            </div>
        </div>)
    }
    const onMouseLeave = () => {
        setNote1("O mnie");
    }
    const onMouseLeave2 = () => {
        setNote2("Kontakt");
    }
    const onMouseEnter3 = () => {
        setNote3(<div>
            <p>Od wieki wieków toczy się spóro to kto? Kto więcej wychodzi z pesem, wynosi śmieci, itp.</p>
            <p style={{color: "red", fontSize: "1.2rem", fontWeight: "bold"}}> Postanowiłem się tym zająć i oto
                rozwiązanie dla wszystkich słóconych par!!</p>
        </div>)
    }
    const onMouseLeave3 = () => {
        setNote3("O co chodzi");
    }
    const handleMail = () => {
        setShow(true)
    }
    const showForm = () => {
        setShow(false)
    }

    if (show === false) {
        return (
            <div className="note_container">
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handleCLick}
                     className="note1">{note1}</div>
                <div onMouseLeave={onMouseLeave2} onClick={handleMail}
                     className="note2">{note2}</div>
                <div onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3} className="note3">{note3}</div>
            </div>
        )
    } else {
        return (
            <div onClick={showForm} style={contactStyle} className="contact_container">
                <p>Facebook</p><a className="fb_text" href="https://www.facebook.com/jakub.juras.12/"> Kuba Juras</a>
            </div>
        )
    }

};

export default Notes;