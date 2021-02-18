import React, { Component } from "react";
import classes from "../AddNewList/AddNewList.module.css";
import List from "../ListManager/Lists/List/List";



class AddNewList extends Component {
    state = { 
        list: [],
        listTitle: ""
    }
    objectWithList = [];


    addTitleHandler = (event) => {
        this.setState({  listTitle: event.target.value });
    };
    
    sumbitListTitleHandler = (event) => {
        event.preventDefault();
        this.setState({
            list: [
                {
                    name: this.state.listTitle,
                },
                ...this.state.list
            ],
            listTitle: ""
        });

        this.objectWithList.push({listName: this.state.listTitle, tasks: []});
        console.log(this.objectWithList);
    } 
    render() {
        return( 
            <>
                <form>
                    <input autoComplete="off" type="text" name="listTitle" placeholder="New list's title..." className={classes.Input} value={this.state.listTitle} onChange={this.addTitleHandler} ></input>
                    <button className={classes.Button} type="submit" onClick={this.sumbitListTitleHandler} >»</button>
                </form> 
                <List lists={this.objectWithList} />
            </>
        );
    }
}

export { AddNewList };