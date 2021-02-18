import React, { Component } from "react";
import Task from "./Task/Task";

class Tasks extends Component {
	
 	render() {
 	if(this.props.tasks.length !== 0) {
		  this.taskToRender = this.props.list.find(list => list.listName === this.props.listTitle).tasks
							 	.map((task, index) => (
							 		<ul>
							 			<Task key={index} task={task}/>
							 		</ul>
					 	)
			 	);
	 }
	 else this.taskToRender =  
	 <ul>
	 	{/* <Task key="first" task={null}/> */}
  	</ul>;
	
        return (
			 <div>	
			 	{this.taskToRender}			 
			 </div>
	 	); 
    	}
};

export default Tasks;