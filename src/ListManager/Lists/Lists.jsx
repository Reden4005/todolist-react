import React, { Component } from "react";
import classes from "../Lists/Lists.module.css";
import Tasks from "./Tasks/Tasks";

class Lists extends Component {
    state = {
        listTitle: "",
        tasks: [],
        task: ""
    }
    
    addTaskHandler = (event) => {
        this.setState({  task: event.target.value, listTitle: this.props.title });
    }

    confirmAddTaskHandler = (event) => {
        event.preventDefault();
        
        this.setState({
            tasks: [
            
                {
                    listTitle: this.state.listTitle,
                    name: this.state.task
                },
                ...this.state.tasks
            ],
            task: ""
        });
        
        const find = this.props.lists.find(list => list.listName === this.state.listTitle);
        if (this.state.task) {
            find.tasks.push(this.state.task);
        }
        this.mainInput.value = "";
    }

    render() {
        return(
            <div className={classes.Lists}>
                <div className={classes.ListHeader}>
                    <button type="button" className={classes.Button + " " + classes.ButtonDelList}>-</button>
                    <p className={classes.P}>{this.props.title}</p>
                </div>
                <form>
                    <Tasks tasks={this.state.tasks} 
                        key={this.props.title} 
                        listTitle={this.props.title} 
                        list={this.props.lists}/>
                    <input autoComplete="off" 
                        name="task" 
                        className={classes.Input} 
                        placeholder="new task..." 
                        onChange={this.addTaskHandler}
                        ref={(ref) => this.mainInput= ref}>
                    </input>
                    <button className={classes.Button} onClick={this.confirmAddTaskHandler} type="submit">»</button>
                </form>
            </div>
        );
    }
}

export { Lists };
