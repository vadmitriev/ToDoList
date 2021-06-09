import {Button, Checkbox, Tooltip} from 'antd'
import List from 'antd/es/list'
import styled from 'styled-components'

const TaskBox = styled.div`
	background: ${({ done }) => (done ? "#92C65A" : "#f5f5f5")};
	padding: 15px;
	border-radius: 5px;
	box-shadow: 0px 5px 15px rgba(50, 50, 50, 0.1);
	border: 1px solid ${({ done }) => (done ? "#92c65a" : "#cfcfcf")};

	& .ant-checkbox-checked {
		&:before {
			border-color: #53861d;
		}

		.ant-checkbox-inner {
			background-color: #53861d;
			border-color: #53861d;
		}
	}

	& .ant-checkbox-wrapper {
		user-select: none;

		& > span:last-of-type {
			margin-left: 5px;
			text-decoration: ${({ done }) => (done ? "line-through" : "none")};
			color: ${({ done }) => (done ? "#FFF" : "rgba(0, 0, 0, 0.65)")};
		}
	}
`

export const Tasks = ({value: {value, isDone}, id, onChange, onDelete}) => {
    console.log("value:", value)
    return (
        <List css={{marginBottom: 15}}>
            <TaskBox done={isDone}>
                <Checkbox checked={isDone} onChange={e => onChange({id, isDone: e.target.checked})} >
                    {value}
                </Checkbox>
                <Tooltip placement="topLeft" title="Удалить">
                    <Button
                        type="danger"
                        shape="circle"
                        icon="delete"
                        css={{
                            float: "right",
                            marginTop: 0
                        }}
                        onCLick={() => onDelete(id)}
                    />
                </Tooltip>
            </TaskBox>
        </List>
    )
}
