import React, { Component } from "react";
import { List } from "./List/List";
import classes from "../Lists/Lists.module.css";
import ListsStorage from "../../Data/ListsStorage";

class Lists extends Component {
    constructor() {
        super();
        this.storage = new ListsStorage();
    }
    deleteList = (event) => {
        event.preventDefault();
        
        const listToDelete = this.props.lists.find(list => list.name === event.target.name);
        
        const indexToDelete = this.props.lists.indexOf(listToDelete);

        this.props.lists.splice(indexToDelete, 1);
        
        this.storage.removeList(event.target.name);
        this.forceUpdate(); 
    };
    
    render() {
        return (
            <div className={classes.Lists}>
                {this.props.lists.map(list => (
                    <List 
                        clicked={this.deleteList} 
                        key={list.listID}
                        name={list.listID} 
                        title={list.listName} 
                        lists={this.props.lists}/> 
                ))}
            </div>
        );
    }
}

export default Lists;

