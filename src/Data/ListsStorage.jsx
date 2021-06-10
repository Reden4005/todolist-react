
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
        if (lists == null) {
            console.log("list empty, importing...");
            this.addNewListToStorage(listName, "");
        } else {
            console.log(listName, "second");
            this.refreshLists(listName, "");
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
    static addNewTaskToStorage(listName, listID, taskName) {
        let actualLists = JSON.parse(localStorage.getItem("lists"));
        let choosenList = actualLists.filter(list => list.listName === listName);
        choosenList[0].tasks.push(
            {
                listName: listName,
                listID: this.listId,
                taskId: IdGenerator(),
                taskName: taskName
            });

        localStorage.setItem("lists", JSON.stringify(actualLists));
    }

    static removeTaskFromList(taskIdToRemove) {
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

    static removeList(listName) {
        let actualLists = JSON.parse(localStorage.getItem("lists"));

        actualLists.map(list => {
            if (list.listName === listName) {
                let index = actualLists.indexOf(list);
                actualLists.splice(index, 1);
                console.log(list, "list", list.listName, index);
            }
            return localStorage.setItem("lists", JSON.stringify(actualLists));
        });
    }
}

export default ListsStorage;