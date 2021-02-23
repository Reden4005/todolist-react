import React from "react";
import classes from "../Header/Header.module.css";
import Clock from "../UI/Clock/Clock";
import kropki from "../img/kropki.png";
import kolko from "../img/kolko.png";

const header = (props) => (
    <div className={classes.Header}>
        <h1 className={classes.h1}>To Do List</h1> 
        <Clock />
        <img src={kropki} alt="kropki" class={classes.Kropki}></img>
        <img src={kolko} alt="kropki" class={classes.Kolko}></img>
    </div>
);

export default header;