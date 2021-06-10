import {Fragment, useEffect} from 'react'
import {observer} from 'mobx-react'
import {useStore} from '../../hooks/useStore'
import {Title} from '../Title/Title'
import {AddTask} from '../AddTask/AddTask'
import {TaskFilter} from '../Filter/TaskFilter'
import {Task} from '../Task/Task'
import {TaskCounter} from '../Counter/TaskCounter'
import {DeleteCompleted} from '../DeleteCompleted/DeleteCompleted'
import {SyncOutlined} from '@ant-design/icons'
import {Spin} from 'antd'

export const ToDoList = observer(() => {
    const {toDoStore} = useStore()

    useEffect(() => {
        toDoStore.load()
    }, [toDoStore])

    async function addNewTask(value) {
        await toDoStore.addNewTask(value)
    }

    function onChangeFilter(status) {
        toDoStore.filterTaskByStatus(status)
    }

    function onChangeTask({id, isDone}) {
        toDoStore.updateTaskStatus({id, isDone})
    }

    function onDeleteTask(id) {
        toDoStore.deleteTask(id)
    }

    const todoDisplay = toDoStore.filteredTasks.map(taskItem => {
        return (
            <Task
                key={taskItem.id}
                taskItem={taskItem}
                onChange={onChangeTask}
                onDelete={onDeleteTask}
            />
        )
    })

    const loadingIcon = <SyncOutlined style={{fontSize: 32}} spin/>

    return (
        <Fragment>
            <Spin
                tip="Загрузка..."
                indicator={loadingIcon}
                spinning={toDoStore.isLoading}
            >
                <Title/>
                <AddTask onChange={addNewTask} />
                <TaskFilter onChange={onChangeFilter} />
                <TaskCounter/>
                {todoDisplay}
                <DeleteCompleted/>
            </Spin>
        </Fragment>
    )
})
