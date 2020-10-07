import React from "react";
import TacoPic from "./images/unsplashTaco.jpg";

const TacoDisplay = () => {
    return (
        <div>
            <h1 style={{color:'red',backgroundColor:'yellow'}}>It's TACO TUESDAY!</h1>
            <img src={TacoPic} alt="tacopic" /> //adding a picture of a taco
        </div>
    );
};

export default TacoDisplay;

