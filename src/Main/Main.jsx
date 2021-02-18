import React, { Component } from "react";
import classes from "../Main/Main.module.css";
import Header from "../Header/Header";
import { AddNewList } from "../AddNewList/AddNewList";

class Main extends Component {

    render() {
        return(
            <div className={classes.Main}> 
                <Header />
                <AddNewList />
            </div>
        );
    }
};

export default Main;