import React from "react";
import TacoPic from "./images/unsplashTaco.jpg";

const TacoDisplay = (props) => {
    return (
        <h1 style={{color:'red',backgroundColor:'yellow'}}>It's TACO TUESDAY!</h1>
        <img src={TacoPic} alt="tacopic" /> //adding a picture of a taco
    );
};

export default TacoDisplay;

