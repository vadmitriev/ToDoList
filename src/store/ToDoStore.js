import {makeAutoObservable, toJS} from 'mobx'

const nameInLocalStorage = 'todostore'
const initialData = [

]

export class AppStore {
    todos = []

    constructor(props) {
        makeAutoObservable(this)
    }

    addNewTask() {

    }

    get getTaskList() {

    }

    get getNumberOfActiveTasks() {

    }

    get getNumberOfCompletedTasks() {

    }

    updateTaskStatus({index, done}) {

    }

    deleteTask(index) {

    }

    deleteCompletedTasks() {

    }

    filterTaskByStatus(status) {

    }

    saveInLocalStorage() {

    }

}
