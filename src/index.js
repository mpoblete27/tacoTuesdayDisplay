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
        this.setState({date:day});
    }

    render() {
        if(this.state.date === 'Tuesday') {
            return(
                <div>
                    <TuesdayDisplay today={this.state.date}/>
                </div>
            );
        }
        return(
                <div>
                    <NotTuesdayBanner />
                    <CountDown />
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