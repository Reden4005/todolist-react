
import IdGenerator from "../UI/IdGenerator/idGenerator";
import { Component } from "react"; 

class ListsStorage extends Component {
    /**
     * Take care about datas in LocalStorage
     * @param {String} listName 
     * @param {JSON} lists
     */
    constructor(listName) {
        super();
        let lists = localStorage.getItem("lists");
        if (listName === undefined) {
            return;
        } else if (lists) {
            this.refreshLists(listName);
        } else {
            this.addNewListToStorage(listName);
        }
    }
    
    addNewListToStorage(listName) {
        this.lists = [
            {
                listId: IdGenerator(),
                listName: listName,
                tasks: []
            }
        ];
        localStorage.setItem("lists", JSON.stringify(this.lists));
    }   

    refreshLists(listName) {
        let actualLists = JSON.parse(localStorage.getItem("lists"));
        actualLists.push({
            listId: IdGenerator(),
            listName: listName,
            tasks: []
        });
        localStorage.setItem("lists", JSON.stringify(actualLists));
    }   

    addNewTaskToStorage(listName, taskName) {
        let actualLists = JSON.parse(localStorage.getItem("lists"));
        let choosenList = actualLists.filter(list => list.listName === listName);
        choosenList[0].tasks.push(
            {
                listName: listName,
                
                taskId: IdGenerator(),
                taskName: taskName
            });

        localStorage.setItem("lists", JSON.stringify(actualLists));
    }

    removeTaskFromList(taskIdToRemove) {
        let actualLists = JSON.parse(localStorage.getItem("lists"));

        actualLists.map(list => list.tasks.filter(task => {
            
            if (task.taskName === taskIdToRemove) {
                let index = list.tasks.indexOf(task);
                list.tasks.splice(index, 1);
            }
            
            return localStorage.setItem("lists", JSON.stringify(actualLists));
        }
        ));
    }

    removeList(listId) {
        let actualLists = JSON.parse(localStorage.getItem("lists"));
        let refreshedLists = actualLists.filter(list => list.listId !== listId);
        return localStorage.setItem("lists", JSON.stringify(refreshedLists));
    }
    
}

export default ListsStorage;
