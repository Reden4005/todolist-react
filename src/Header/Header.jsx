import React, { Component } from "react";
import classes from "../Header/Header.module.css";
import Clock from "../UI/Clock/Clock";
import dots from "../img/kropki.png";
import circle from "../img/kolko.png";

class Header extends Component {
    state = {
        isSpinning: true
    }

    stopSpinning = () => {
        this.setState({ isSpinning: !this.state.isSpinning });
    };

    render() {
        return (
            <div className={classes.Header}>
                <h1 className={classes.h1}  >To Do List</h1> 
                <Clock />
                <img 
                    src={dots} 
                    alt="dots" 
                    onClick={this.stopSpinning} 
                    className={this.state.isSpinning ? classes.Dots : classes.Dots + " " + classes.DotsWithoutSpinning}></img>
                <img 
                    src={circle} 
                    alt="circle" 
                    className={classes.Circle}></img>
            </div>
        );
    }
}

export default Header;
