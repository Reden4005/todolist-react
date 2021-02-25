import React from "react";
import classes from "../InputWithSubmitButton/InputWithSubmitButton.module.css";

const inputWithSubmitButton = (props) => {
    return (
        <form className={classes.InputWithButton}>
            <input autoComplete="off" 
                type="text" 
                name={props.name} 
                placeholder={props.placeholder} 
                value={props.value} 
                onChange={props.changed} 
                className={classes.Input}
                ref={props.clear}></input>
            <button 
                type="submit" 
                onClick={props.clicked} 
                className={classes.Button}>»</button>
        </form>  
    );
};

export default inputWithSubmitButton;
