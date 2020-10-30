import React, {useState} from 'react';
import './_notes.scss';
import  BackgroundImage from "../../images/me1.jpg";
import  BackgroundImage2 from "../../images/me2.jpg";
import  BackgroundImage3 from "../../images/me3.jpg";


const Notes = () => {
    const [note1, setNote1] = useState("O autorze");
    const [note2, setNote2] = useState("Co można");
    const [note3, setNote3] = useState("O co chodzi");
    const [pic, setPic] = useState(BackgroundImage3);

    const note1Style = {
        height: "10rem",
        width: "13rem",
        backgroundImage: `url(${pic})`,
         backgroundSize: "cover",
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
                    <div style={{color: "red", fontSize: "1.5rem"}}> Chesz Mnie zobaczyć KLINKIJ!</div>
            </div>)
    }
    const onMouseLeave = () => {
        setNote1("O autorze");
    }
    const onMouseEnter2 = () =>{
            setNote2(<div style={{padding: "1rem"}}>
                <p>Stronka jest interaktywna, w elementy możesz klikać lub przesuwać, szukać;)</p>
                <p>Możesz też zobaczyć moją rywalizację z żoną o miano małżonka roku</p>
                <p style={{color: "red", fontSize:" 1.5rem"}}>BAW SIĘ!</p>
            </div>)
    }
    const onMouseLeave2 = () => {
        setNote2("Co można");
    }
    const onMouseEnter3 = () =>{
            setNote3("Stronka jest interaktywna, w elementy możesz klikać lub przesuwać, szukać;)")
    }
    const onMouseLeave3 = () => {
        setNote3("Co można");
    }
        return (
            <div className="note_container">
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handleCLick} className="note1">{note1}</div>
                <div onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}  className="note2">{note2}</div>
                <div onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}  className="note3">{note3}</div>
            </div>
        );


};

export default Notes;