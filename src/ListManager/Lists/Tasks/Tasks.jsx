import React from "react";
import Task from "./Task/Task";

const tasks = (props) => {
    return (
	 	<div>	
		 	{
			 props.list.filter(list => (list.listTitle === props.listTitle)) 
				 		.map((task, index) => (
					        <ul>
						    	<Task key={index} task={task.name}/>
						 	</ul>
					 	)
			 	)
		 	}			 
	 	</div>
	 	);
		 
};

export default tasks;