import React, { Component } from "react";
import classes from "../Task/Task.module.css";

class Task extends Component {
    state = {
        checked: false
    };

    lineTrought = (event) => {
        event.preventDefault();
        this.setState({checked: !this.state.checked});
    }
    render() { 
        return (
            <div className={classes.Li}>
                <button type="checkbox" 
                    className={!this.state.checked ? classes.Checkbox : classes.CheckboxChecked} 
                    onClick={this.lineTrought}>🗸</button>
                <li className={this.state.checked ? classes.Checked : null}>{this.props.task}</li>
            </div>
        );
    }
};

export default Task;