import React, { Component } from "react";
import Task from "./Task/Task";

class Tasks extends Component {

    delTask(taskToDel) {
        const foundListName = this.props.tasks.find(task => task.name === taskToDel) //undefined?
            .listTitle;

        const foundList = this.props.list.find(list => list.listName === foundListName);

        const foundTaskIdxInList = foundList.tasks.indexOf(taskToDel);

        foundList.tasks.splice(foundTaskIdxInList, 1);

        this.forceUpdate();
    }

    render() {
        if (this.props.tasks.length !== 0) {
            this.taskToRender = this.props.list.find(list => list.listName === this.props.listTitle).tasks
                .map((taskName, index) => (
                    <ul>
                        <Task key={index} taskName={taskName} delTask={this.delTask.bind(this)}/>
                    </ul>
                )
                );
        }
        else this.taskToRender = <ul></ul>;

        return (
            <div>	
                {this.taskToRender}			 
            </div>
        ); 
    }
}

export default Tasks;
