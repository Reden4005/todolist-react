
import React, { Component } from "react";
import classes from "../Clock/Clock.module.css";

class Clock extends Component {
    state = {
        currentTime: new Date().toLocaleTimeString()
    }

    componentDidMount() {
        this.clockUpdateInterval =  setInterval(() => {
            this.setState({currentTime: new Date().toLocaleTimeString()});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockUpdateInterval);
    }
    
    render() {
        return (
            <p className={classes.Clock}>{this.state.currentTime}</p>
        );
    }
}

export default Clock;