import React from "react";
import { Lists } from "../../Lists/Lists";
import classes from "../List/List.module.css";

const list = (props) => {
    return (
        <div className={classes.Lists}>
            {props.title.map((title, index) => (
                <Lists  key={index} title={title.name}/> 
            ))}
        </div>
    );
};

export default list;

