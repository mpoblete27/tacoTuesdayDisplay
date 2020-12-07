import React from 'react';

const CountDown = () => {
    let daysLeft;
    switch (new Date().getDay()) {
        case 0:
            daysLeft = 2;
            break;
        case 1:
            daysLeft = 1;
            break;
        case 2:
            daysLeft = 0; 
            break;
        case 3:
            daysLeft = 6;
            break;
        case 4:
            daysLeft = 5;   
            break;
        case 5:
            daysLeft = 4;
            break;
        case 6:
            daysLeft = 3;
            break;
        default:
            daysLeft = "default statement added" //added to prevent warning
        };
    let isPlural;
    let isAre;
    if (daysLeft === 1) {
        isAre = "is";
        isPlural = "day";
    } else {
        isAre = "are"
        isPlural = "days"
    };

    return <h1>There {isAre} {daysLeft} {isPlural} left until the next Taco Tuesday</h1>
};

export default CountDown;