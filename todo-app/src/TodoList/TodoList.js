import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ items }) {
    return (
        <React.Fragment>
            <ul>
                {items.map((item) => <TodoItem key={item.id} {...item} />)}
            </ul>
        </React.Fragment>
    );
}