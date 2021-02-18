import React from "react";
import { Lists } from "../Lists";
import classes from "../List/List.module.css";

const list = (props) => {
    return (
        <div className={classes.Lists}>
            {props.lists.map((title, index) => (
                <Lists  key={index} title={title.listName} lists={props.lists}/> 
            ))}
        </div>
    );
};

export default list;

