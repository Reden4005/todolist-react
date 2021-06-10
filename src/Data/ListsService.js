//import { Component } from "react";

class ListsData {
    /**
     * Retrieves all lists.
     * @returns {Promise<object[]>} all lists
     */
    static getLists() {
        const actualLists = JSON.parse(localStorage.getItem("lists"));
        let listsToRender = [];
        if(actualLists) {
            actualLists.forEach(list => listsToRender.push({listName: list.listName, listID: list.listId}));
        }
        return Promise.resolve(listsToRender);
    }
    static refreshData() {
        const actualLists = JSON.parse(localStorage.getItem("lists"));

        let refreshList = actualLists.map(list => list.tasks);
        console.log(refreshList);
        return refreshList;
    }
    static addTasks(listID, taskName) {
        const actualLists = JSON.parse(localStorage.getItem("lists"));
        const test = actualLists.filter(list => listID === list.listId)[0].tasks.push(taskName);
        console.log(test);
        return actualLists;
    }
	


}

export default ListsData;