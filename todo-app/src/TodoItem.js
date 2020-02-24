import React, { useContext } from 'react';
import { TodoContext } from './context';

export default function TodoItem({ id, title, isCompleted }) {
    const { onRemoveItem, onCheckTodoItem } = useContext(TodoContext);

    return (
        <span>
            <li>
                <input type="checkBox"
                    checked={isCompleted}
                    onChange={() => onCheckTodoItem(id)} />
                {title}
                <span onClick={() => onRemoveItem(id)}>X</span>
            </li>
        </span>
    )
}