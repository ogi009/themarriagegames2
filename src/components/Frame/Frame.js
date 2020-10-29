import React, {useState} from 'react';
import "./_frame.scss"
import  BackgroundImage from "../../images/us.jpg";
import  BackgroundImage2 from "../../images/us2.jpg";
import  BackgroundImage3 from "../../images/us3.jpg";

const Frame = () => {
    const [pic, setPic] = useState(BackgroundImage);
    const [moveFrame, setMoveFrame] = useState("rotate(1deg)");
     const frameStyle = {
         width: "400px",
         height: "300px",
         backgroundImage: `url(${pic})`,
         backgroundPosition: "center",
         backgroundSize: "cover",
         border: "10px solid black",
         boxShadow: "9px 10px 5px 0 rgba(0,0,0,.75)",
         position: "absolute",
         right:"-2rem",
         top: "5rem",
         transform: moveFrame,
     }
     const handleClick = () =>{
         if (pic === BackgroundImage) {
             setPic(BackgroundImage2);
         }
         else if (pic === BackgroundImage2) {
             setPic(BackgroundImage3);
         } else {
             setPic(BackgroundImage)
         }
     }
     const handleMouse = () => {
         if( moveFrame === "rotate(1deg)") {
             setMoveFrame("rotate(-1deg)")
         } else {
             setMoveFrame("rotate(1deg)")
         }

     }
    return (
        <div onClick={handleClick} onMouseEnter={handleMouse} className="frame_container" style={frameStyle}>
            {/*<div className="string">*/}
            {/*    <div className="nail"></div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Frame;