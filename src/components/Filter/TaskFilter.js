import {Radio} from 'antd'

const FilterStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'inline-block'
}

export const TaskFilter = ({onChange}) => {
    return (
        <div style={FilterStyle}>
            <Radio.Group
                defaultValue="all"
                buttonStyle="solid"
                onChange={e => onChange(e.target.value)}
            >
                <Radio.Button value="all">Все</Radio.Button>
                <Radio.Button value="active">В работе</Radio.Button>
                <Radio.Button value="completed">Выполненные</Radio.Button>
            </Radio.Group>
        </div>
    )
}
