import React from 'react'
import {observer} from 'mobx-react'
import {Layout} from 'antd'
import {ToDoList} from '../TodoList/ToDoList'

const WrapperStyle = {
    width: '560px',
    margin: '50px auto',
    backgroundColor: '#fff',
    borderRadius: '25px',
    padding: '20px',
    boxShadow: 'rgba(50, 50, 50, 0.1) 0px 10px 35px'
}

const {Content, Footer} = Layout

export const Main = observer(() => {
    return (
        <Layout style={{minHeight: '100vh', marginRight: 30}}>
            <Content style={{margin: '0 16 px'}}>
                <div style={WrapperStyle}>
                    <ToDoList/>
                </div>
            </Content>

            <Footer
                style={{textAlign: 'center'}}
            >
                Список ToDo. Автор: <a href="https://github.com/vadmitriev/"
                   target="_new"
                   rel="follow"
                >
                     Владимир Дмитриев
                </a>
            </Footer>
        </Layout>
    )
})
