import React from 'react';

function TodoItem(){
    return(
        <div>item</div>
    )
}

export default function TodoList({todoList}) {
    return (
        <div>
            <TodoItem />
        </div>
    )
}