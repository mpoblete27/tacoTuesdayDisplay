import React from "react";
import ReactDOM from "react-dom";
import TuesdayDisplay from "./TuesdayDisplay";
import CountdownTimer from "./CountdownTimer";

class App extends React.Component {
    state = { date: ''};

    componentDidMount() {
        const daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let day = daysOfTheWeek[ new Date().getDay() ];
        this.setState({date:day});
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
                    <CountdownTimer />
                    {/* add countdown to the next tuesday */}
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