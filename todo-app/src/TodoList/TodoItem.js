import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';

export default function TodoItem({ id, title, isCompleted }) {
    const { onRemoveItem, onCheckTodoItem } = useContext(TodoContext);

    const cls = isCompleted ? "todo completed" : "todo";

    return (
        <span>
            <li className={cls}>
                <label>
                    <input type="checkBox"
                        checked={isCompleted}
                        onChange={() => onCheckTodoItem(id, isCompleted)} />
                    <span>{title}</span>
                    <span onClick={() => onRemoveItem(id, isCompleted)}>X</span>
                </label>
            </li>
        </span>
    )
}