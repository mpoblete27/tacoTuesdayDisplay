import React from "react";

const TacoDisplay = (props) => {
    console.log(props.today)
    return (
        <h1 style={{color:'red',backgroundColor:'yellow'}}>It's  TACO TUESDAY BITCHES!</h1>
    );
};

export default TacoDisplay;

