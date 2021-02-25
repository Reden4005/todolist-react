import React, { Component } from "react";
import Lists from "../ListManager/Lists/Lists";
import InputWithSubmitButton from "../UI/InputWithSubmitButton/InputWithSubmitButton";


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
                <InputWithSubmitButton name="listTitle" 
                    placeholder="New list's title..."
                    value={this.state.listTitle}
                    changed={this.addTitleHandler}
                    clicked={this.sumbitListTitleHandler} />
                <Lists lists={this.objectWithList} />
            </>
        );
    }
}

export { AddNewList };
