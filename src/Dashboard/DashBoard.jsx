import React, { Component } from "react";
import Lists from "../ListManager/Lists/Lists";
import InputWithSubmitButton from "../UI/InputWithSubmitButton/InputWithSubmitButton";
import ListsStorage from "../Data/ListsStorage";
import ListsData from "../Data/ListsService";

class DashBoard extends Component {
    state = { 
        listTitle: "",
        lists: []
    }
    
    componentDidMount(){
        ListsData.getLists().then(lists => {
            if (lists.length !== 0) {
                this.setState({lists});
            }
        });
    }
    
    addTitleHandler = (event) => {
        this.setState({ listTitle: event.target.value });
    };
    
    sumbitListTitleHandler = (event) => {
        event.preventDefault();
        new ListsStorage(this.state.listTitle);
        if(this.state.lists) {
            ListsData.getLists().then(lists => {
                this.setState({lists});
            });
        }
    } 
    render() {
        return( 
            <>
                <InputWithSubmitButton 
                    name="listTitle" 
                    placeholder="New list's title..."
                    value={this.state.listTitle.slice(0, 15)}
                    changed={this.addTitleHandler}
                    clicked={this.sumbitListTitleHandler} />
                <Lists lists={this.state.lists} />
            </>
        );
    }
}

export { DashBoard };

