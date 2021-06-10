import React, {useState} from 'react'
import {Input} from 'antd'

const MAX_LENGTH = 25    // Максимальное количество символов
export const AddTask = ({onChange}) => {
    const [text, setText] = useState('')

    const onSearch = (value, event) => {
        if (!value) return
        onChange(value)

        setText('')
    }

    const onTextChange = (event) => {
        setText(event.target.value)
    }

    return (
        <Input.Search
            placeholder="Новая задача"
            onChange={onTextChange}
            onSearch={onSearch}
            enterButton="Добавить"
            maxLength={MAX_LENGTH}
            value={text}
            allowClear
        />
    )
}
