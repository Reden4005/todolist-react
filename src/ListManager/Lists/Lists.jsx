import React, { Component } from "react";
import { List } from "./List/List";
import classes from "../Lists/Lists.module.css";

class Lists extends Component {

    deleteList = (event) => {
        event.preventDefault();
        
        const listToDelete = this.props.lists.find(list => list.listName === event.target.name);
        const indexToDelete = this.props.lists.indexOf(listToDelete);
        if (listToDelete.tasks.length !== 0) {
            listToDelete.tasks.splice(0, listToDelete.tasks.length);
            console.log(listToDelete.tasks);
        }
        this.props.lists.splice(indexToDelete, 1);
        
        console.log(this.props.lists);
        
        this.forceUpdate(); 
        console.log(listToDelete, "del", indexToDelete);
    };
    render() {
        return (
            <div className={classes.Lists}>
                {this.props.lists.map((title, index) => (
                    <List 
                        clicked={this.deleteList} 
                        key={index} 
                        title={title.listName} 
                        lists={this.props.lists}/> 
                ))}
            </div>
        );
    }
}

export default Lists;

