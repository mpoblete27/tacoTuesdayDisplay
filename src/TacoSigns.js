import React from "react";

const arrayOfSayings = ["If you don't like tacos, I'm nacho type", "You look sad. Wanna taco bout it?", "You can't make everyone happy. You're not a taco.", "As for me and my house, we will serve tacos. -Salsa 24:7", "Life is hard. Tacos help.", "I wonder if tacos think about me too."];

let randomSaying = arrayOfSayings[Math.floor(Math.random()*arrayOfSayings.length)];

const TacoSigns = () => {
    return (
        <h1 style={{backgroundColor: "#ff7b25", color: "#feb236" }}>{randomSaying}</h1>
    );
};
export default TacoSigns;