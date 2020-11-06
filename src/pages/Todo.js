import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';

const Todo = props => {
    const [todoObj, setTodoObj] = useState([]);

    useEffect(()=>{
        if(props.todoList) {
            localStorage.setItem('todoList',JSON.stringify(props.todoList));
            const getJsonData = localStorage.getItem('todoList');
            setTodoObj(JSON.parse(getJsonData));
        }
    },[props.todoList]);

    return (
        <div className="container my-3">
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tasks</h5>
                            <TodoForm />
                            <ul className="list-group list-group-flush">
                                {
                                    todoObj && todoObj.map((itm, idx) => {
                                        return <li key={idx} className="list-group-item">{itm?.todo}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        todoList: state.todo.todoList,
    }
};

export default connect(mapStateToProps)(Todo);
