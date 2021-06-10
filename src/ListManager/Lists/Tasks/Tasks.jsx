import React, { Component } from "react";
// import Task from "./Task/Task";
import ListsStorage from "../../../Data/ListsStorage";
import ListData from "../../../Data/ListsService";

class Tasks extends Component {

    delTask(taskToDel) {
        const foundListName = this.props.tasks.find(task => task.name === taskToDel)
            .listTitle;

        const foundList = this.props.list.find(list => list.listName === foundListName);

        const foundTaskIdxInList = foundList.tasks.indexOf(taskToDel);

        foundList.tasks.splice(foundTaskIdxInList, 1);

        this.forceUpdate();
        ListsStorage.removeTaskFromList(taskToDel);
    }

    
    actualListsWithTasks = ListData.refreshData();
    

    render() {
        // if (this.actualListsWithTasks) {
        //     this.taskToRender = this.actualListsWithTasks.find(list => list.listId === this.props.name).tasks
        //         .map((taskName, index) => (
        //             <ul>
        //                 <Task key={index} taskName={taskName} delTask={this.delTask.bind(this)}/>
        //             </ul>
        //         ));
        // }
        // else 
        this.taskToRender = <ul></ul>;
        console.log(this.actualListsWithTasks, "to");
        return (
            <div>	
                {this.taskToRender}			 
            </div>
        ); 
    }
}

export default Tasks;
