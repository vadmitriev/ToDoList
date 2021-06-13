import {action, makeAutoObservable, toJS} from 'mobx'
import {sleep} from '../utils/utils'
import {nanoid} from 'nanoid'

const NAME_IN_LOCAL_STORAGE = 'todoStore'

const initialData = [
    {id: nanoid(), value: 'Купить хлеб ', isDone: true},
    {id: nanoid(), value: 'Купить колбасу', isDone: false},
    {id: nanoid(), value: 'Купить молоко', isDone: false}
]

export class ToDoStore {
    isLoading = false
    status = 'all'
    tasks = []
    filteredTasks = []

    constructor() {
        makeAutoObservable(this)
    }

    async load() {
        this.isLoading = true
        await this.getTaskList().then(
            action(() => {
                this.filteredTasks = this.tasks
                this.isLoading = false
            })
        )
    }

    async addNewTask(value) {
        this.tasks.unshift({
            id: nanoid(),
            value,
            isDone: false
        })

        this.filteredTasks = this.tasks
        this.filterTaskByStatus(this.status)

        this.saveInLocalStorage()
    }

    async getTaskList() {
        await sleep(500)
        const tasks = localStorage.getItem(NAME_IN_LOCAL_STORAGE)
        this.tasks = JSON.parse(tasks) ?? initialData
    }

    get getNumberOfAllTasks() {
        return this.tasks.length
    }

    get getNumberOfActiveTasks() {
        return this.tasks.filter(task => !task.isDone).length
    }

    get getNumberOfCompletedTasks() {
        return this.tasks.filter(task => task.isDone).length
    }

    updateTaskStatus({id, isDone}) {
        const index = this.tasks.findIndex(task => task.id === id)

        this.tasks[index].isDone = isDone
        this.filteredTasks = this.tasks
        this.filterTaskByStatus(this.status)

        this.saveInLocalStorage()
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
        this.filteredTasks = this.tasks
        this.saveInLocalStorage()
    }

    deleteCompletedTasks() {
        this.tasks = this.tasks.filter(task => !task.isDone)

        this.filterTaskByStatus(this.status)
        this.saveInLocalStorage()
    }

    filterTaskByStatus(status) {
        this.status = status
        this.filteredTasks = this.tasks.filter(task => {
            switch (status) {
                case 'completed':
                    return task.isDone
                case 'active':
                    return !task.isDone
                default:
                    return true
            }
        })
    }

    filterByText(text) {
        this.filteredTasks = this.tasks.filter(task => {
            return task.value.startsWith(text)
        })
    }

    saveInLocalStorage() {
        localStorage.setItem(NAME_IN_LOCAL_STORAGE, JSON.stringify(toJS(this.tasks)))
    }
}

export default ToDoStore
