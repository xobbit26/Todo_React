import React from 'react';

import './todo-list.css';

function TodoItem({ todoItem }) {
    console.log("todoItem", todoItem)
    return (
        <div className="row">
            <div className="col-md-2">
                <input type="checkbox" checked={todoItem.completed} />
            </div>
            <div className="col-md-6 todo-item-text">
                {todoItem.text}
            </div>
            <div className="col-md-2">{todoItem.createdOn}</div>
            <div className="col-md-2"><a type="link" title="delete">x</a></div>
        </div>
    )
}

export default function TodoList({ todoList }) {
    console.log("todoList", todoList);
    return (
        <div>
            {todoList.map((item) => {
                return (
                    <TodoItem key={item.id} todoItem={item} />
                )
            })}
        </div>
    )
}