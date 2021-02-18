import React, { Component } from "react";
import classes from "../Lists/Lists.module.css";
import Tasks from "./Tasks/Tasks";


// let LISTS = [{listTitle: "", name: null}];

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
        
        // LISTS.push(...this.state.tasks);
        const find = this.props.lists.find(list => list.listName === this.state.listTitle);
        if (this.state.task) {
            find.tasks.push(this.state.task);
        }
        console.log( "list", find, this.props.lists);
        
    }

    render() {
        return(
            <div className={classes.Lists}>
                <form>
                    <p className={classes.P}>{this.props.title}</p>
                    <Tasks tasks={this.state.tasks} key={this.props.title + Math.random()} listTitle={this.props.title} list={this.props.lists}/>
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

export { Lists };