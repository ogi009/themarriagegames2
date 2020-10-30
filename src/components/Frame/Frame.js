import React, {useState} from 'react';
import "./_frame.scss"
import  BackgroundImage from "../../images/us.jpg";
import  BackgroundImage2 from "../../images/us2.jpg";
import  BackgroundImage3 from "../../images/us3.jpg";

const Frame = () => {
    const [pic, setPic] = useState(BackgroundImage);

     const frameStyle = {
         width: "200px",
         height: "150px",
         backgroundImage: `url(${pic})`,
         backgroundPosition: "center",
         backgroundSize: "cover",
         border: "10px solid black",
         position: "absolute",
         right:"43rem",
         top: "18rem",

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
    return (
        <div onClick={handleClick}  className="frame_container" style={frameStyle}>
            {/*<div className="string">*/}
            {/*    <div className="nail"></div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Frame;