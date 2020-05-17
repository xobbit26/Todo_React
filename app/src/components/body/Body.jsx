import React, { useState, useContext } from 'react';
import TodoList from '../todo-list/TodoList';
import { TodoContext } from "../../todoContext";

import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './body.css';

export default function Body() {
    const [todoText, setTodoText] = useState("");
    const { onCreateTodo } = useContext(TodoContext);

    function onInputChange(e) {
        setTodoText(e.target.value);
    }

    function _onCreateTodo() {
        onCreateTodo(todoText);
        setTodoText("");
    }

    return (
        <div className="app-body">
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Input your new todo"
                    value={todoText}
                    onChange={onInputChange} />
                <InputGroup.Append>
                    <Button
                        variant="outline-secondary"
                        disabled={todoText === ""}
                        onClick={_onCreateTodo}>Add todo
                    </Button>
                </InputGroup.Append>
            </InputGroup>
            <TodoList />
            <hr />
        </div>
    )
}