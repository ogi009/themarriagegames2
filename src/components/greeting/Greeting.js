import React,{useState,useEffect} from 'react';
import "./_greeting.scss"

const Greeting = () => {
    const [show, setShow] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setShow(true)
        },1000)
        setTimeout(()=>{
            setShow(false)
        },4000)
    },[])

    if (show === false) {
        return null
    } else {
        return (
            <div className="title_box">
                <h1 className="title">Kto tam??</h1>
            </div>
        );
    }
};

export default Greeting;