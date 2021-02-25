import React, { Component } from "react";
import classes from "../Task/Task.module.css";

class Task extends Component {
    state = {
        checked: false
    };

    /**
     * 
     * @param {Event} event 
     */
    deleteTask(event) {
        this.props.delTask(this.props.taskName);
        event.preventDefault();
    }

    deleteTaskHandler = this.deleteTask.bind(this);

    lineTrought = (event) => {
        event.preventDefault();
        this.setState({checked: !this.state.checked});
        console.log(event);
    }
    render() { 
        return (
            <div className={classes.Li}>
                <button type="checkbox" 
                    className={!this.state.checked ? classes.Checkbox : classes.CheckboxChecked} 
                    onClick={this.lineTrought}>🗸</button>
                <li className={this.state.checked ? classes.Checked : classes.Check}>{this.props.taskName}</li>
                <button type="button" onClick={this.deleteTaskHandler} name={this.props.taskName} className={classes.DelBtn}>🗑</button>
            </div>
        );
    }
}

export default Task;
