import React from "react";
import ReactDOM from "react-dom";
import TuesdayDisplay from "./TuesdayDisplay";
import NotTuesdayBanner from "./NotTuesdayBanner";
import CountDown from "./CountDown";

class App extends React.Component {
    state = { date: ''};

    componentDidMount() {
        const daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let day = daysOfTheWeek[ new Date().getDay() ];
        this.setState({date:day, numberOfDays:waiting});

        const week = ['Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday'];
        let waiting =  week[6]-week[ new Date().getDay() ];
    
    }

    render() {
        if(this.state.date === 'Tuesday') {
            return(
                <div>
                    {/* It's tuesday, import the TacoDisplay */}
                    <TuesdayDisplay today={this.state.date}/>
                </div>
            );
        }
        return(
                <div>
                    <NotTuesdayBanner />
                    {/* add countdown to the next tuesday */}
                    <CountDown daysLeft={this.state.numberOfDays} />
                </div>
            );
        
        // return(
        //     <div>
        //         The Day of the week is is: {this.state.date}
        //     </div>
        // )
    }
};

ReactDOM.render(
    <App />, document.querySelector('#root')
);