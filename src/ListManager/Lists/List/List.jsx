import React, { Component } from "react";
import classes from "../List/List.module.css";
import Tasks from "../Tasks/Tasks";
import InputWithSubmitButton from "../../../UI/InputWithSubmitButton/InputWithSubmitButton";
import ListsStorage from "../../../Data/ListsStorage";
import ListsData from "../../../Data/ListsService";

class List extends Component {
   
    storage = new ListsStorage();

    state = {
        listTitle: "",
        tasks: [],
        task: "",
        lists: this.props.lists
    }

    addTaskHandler = (event) => {
        this.setState({ task: event.target.value, listTitle: this.props.title });
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
        
        if (this.state.task) {
            ListsData.addTasks(this.props.name, this.state.task);
          
            this.storage.addNewTaskToStorage(this.state.listTitle, this.state.task);
        }
        this.mainInput.value = "";
    }

    render() {
        return (
            <div className={classes.Lists}>
                <div className={classes.ListHeader}>
                    <button name={this.props.name} 
                        onClick={this.props.clicked} 
                        type="button" 
                        className={classes.Button + " " + classes.ButtonDelList}>-</button>
                    <p className={classes.P} name={this.props.name}>{this.props.title}</p>
                </div>
                <Tasks tasks={this.state.tasks} 
                    key={this.props.title} 
                    listTitle={this.props.title} 
                    list={this.state.lists}
                    deleteList={this.deleteList}/>
                <InputWithSubmitButton name="task"
                    placeholder="new task"
                    changed={this.addTaskHandler}
                    clear={(ref) => this.mainInput= ref}
                    clicked={this.confirmAddTaskHandler}/>
            </div>
        );
    }
}

export { List };
