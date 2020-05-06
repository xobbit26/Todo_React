import React, { useState } from 'react';
import TodoList from '../todo-list/TodoList';

import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './body.css';

export default function Body({todoList}) {
    const [todoText, setTodoText] = useState("");

    function onInputChange(e){
        setTodoText(e.target.value);
    }

    return (
        <div className="app-body">
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Input your new todo"
                    value={todoText}
                    onChange={onInputChange} />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>

                <TodoList />
            </InputGroup>
        </div>
    )
}