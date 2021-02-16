import React, { Component } from "react";
import classes from "../Lists/Lists.module.css";
import Tasks from "./Tasks/Tasks";

let LISTS = [{listTitle: "", name: null}];

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
        
        LISTS.push(...this.state.tasks);
        console.log(LISTS, "list");
        
    }

    render() {
        return(
            <div className={classes.Lists}>
                <form>
                    <p className={classes.P}>{this.props.title}</p>
                    <Tasks tasks={this.state.tasks} key={this.props.title} listTitle={this.props.title} list={LISTS}/>
                    <input autoComplete="off" 
                        name="task" 
                        className={classes.Input} 
                        placeholder="new task..." 
                        onChange={this.addTaskHandler}>
                    </input>
                    <button className={classes.Button} onClick={this.confirmAddTaskHandler} type="submit">»</button>
                </form>
            </div>
        );
    }
};

export { Lists, LISTS };