import React from 'react';

function TodoItem({ todoItem }) {
    console.log("todoItem", todoItem)
    return (
        <div>
            <div>{todoItem.text}</div>
            <div>{todoItem.createdOn}</div>
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