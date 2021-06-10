import {observer} from 'mobx-react'
import {useStore} from '../../hooks/useStore'

const BoxStyle = {
    float: 'right',
    marginTop: '5px',
    marginRight: '10px'
}

export const TaskCounter = observer(() => {
    const {toDoStore} = useStore()

    const allTasksCount = toDoStore.getNumberOfAllTasks
    const completedTasksCount = toDoStore.getNumberOfCompletedTasks

    return (
        <div style={BoxStyle}>
            Всего: {allTasksCount}
            <br></br>
            Выполнено: {completedTasksCount}
        </div>
    )
})
