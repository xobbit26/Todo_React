import React, { useContext } from 'react';
import { TodoContext } from '../../todoContext';

import './todo-list.css';

const TodoItem = React.memo(({ todoItem }) => {
    console.log("todoItem", todoItem);
    const { onDeleteTodo } = useContext(TodoContext);

    return (
        <div className="row">
            <div className="col-md-2">
                <input type="checkbox" checked={todoItem.completed} />
            </div>
            <div className="col-md-6 todo-item-text">
                {todoItem.text}
            </div>
            <div className="col-md-2">{todoItem.createdOn}</div>
            <div className="col-md-2">
                <a type="link" title="delete" onClick={() => onDeleteTodo(todoItem.id)}>x</a>
            </div>
        </div>
    )
})

export default function TodoList() {
    const { todoList } = useContext(TodoContext);

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