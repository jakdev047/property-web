import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TodoForm from '../components/TodoForm';

const Todo = () => {
    const location = useLocation();
    const todoList = location?.state || [];
    localStorage.setItem('todoList', JSON.stringify(todoList));
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
                                    todoList.map((itm, idx) => {
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

export default Todo;
