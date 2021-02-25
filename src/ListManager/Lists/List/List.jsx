import React, { Component } from "react";
import classes from "../List/List.module.css";
import Tasks from "../Tasks/Tasks";
import InputWithSubmitButton from "../../../UI/InputWithSubmitButton/InputWithSubmitButton";

class List extends Component {
    state = {
        listTitle: "",
        tasks: [],
        task: "",
        
        lists: this.props.lists

    }
    // componentDidMount() {
       

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
                    <button name={this.props.title} 
                        onClick={this.props.clicked} 
                        type="button" 
                        className={classes.Button + " " + classes.ButtonDelList}>-</button>
                    <p className={classes.P}>{this.props.title}</p>
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
