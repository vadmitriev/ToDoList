import React, {useState} from 'react'
import {Input} from 'antd'
import {useStore} from '../../hooks/useStore'
import {observer} from 'mobx-react'

const MAX_LENGTH = 25    // Максимальное количество символов
export const AddTask = observer(({onChange}) => {
    const {toDoStore} = useStore()
    const [text, setText] = useState('')

    const onSearch = (value, event) => {
        if (!value) return
        onChange(value)

        setText('')
    }

    const onTextChange = (event) => {
        const inputValue = event.target.value
        toDoStore.filterByText(inputValue)
        setText(inputValue)
    }

    return (
        <Input.Search
            placeholder={`Новая задача (не более ${MAX_LENGTH} символов)`}
            onChange={onTextChange}
            onSearch={onSearch}
            enterButton="Добавить"
            maxLength={MAX_LENGTH}
            value={text}
            allowClear
        />
    )
})
