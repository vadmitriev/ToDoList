import {observer} from 'mobx-react'
import {useStore} from '../../hooks/useStore'
import {DeleteOutlined} from '@ant-design/icons'
import {Button} from 'antd'

export const DeleteCompleted = observer(() => {
    const {toDoStore} = useStore()

    function deleteCompletedTasks() {
        toDoStore.deleteCompletedTasks()
    }

    return (
        <Button
            disabled={!toDoStore.getNumberOfCompletedTasks}
            type="danger"
            icon= {<DeleteOutlined/>}
            onClick={deleteCompletedTasks}
            style={{marginTop: 10}}
        >
            Удалить выполненные
        </Button>
    )
})