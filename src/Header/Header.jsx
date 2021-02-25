import React, { Component } from "react";
import classes from "../Header/Header.module.css";
import Clock from "../UI/Clock/Clock";
import kropki from "../img/kropki.png";
import kolko from "../img/kolko.png";

class Header extends Component {
    state = {
        isSpinning: true
    }

    stopSpinning = () => {
        this.setState({isSpinning: !this.state.isSpinning});
    };

    render() {
        return (<div className={classes.Header}>
            <h1 className={classes.h1}  >To Do List</h1> 
            <Clock />
            <img src={kropki} alt="kropki" onClick={this.stopSpinning} class={this.state.isSpinning ? classes.Kropki : classes.Kropki + " " + classes.KropkiWithoutSpinning}></img>
            <img src={kolko} alt="kropki" class={classes.Kolko}></img>
        </div>
        );
    }
}

export default Header;