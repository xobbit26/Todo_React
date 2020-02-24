import React, { useState, useEffect } from 'react';
import './index.css';
import TodoList from './TodoList';
import { TodoContext } from './context';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
    setTodos(raw);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onAddTodo = (event) => {
    if (event.key === 'Enter' && todoTitle !== '') {
      const newTodo = {
        id: Date.now(),
        title: todoTitle,
        isCompleted: false
      };
      setTodos([...todos, newTodo]);
      setTodoTitle('');
    }
  }

  const onRemoveItem = (todoIdToRemove) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== todoIdToRemove;
    }));
  }

  const onCheckTodoItem = (event) => {
    const { todoId, isChecked } = event.target;

    if (isChecked) {
      const completedTodo = todos.find((todo) => todo.id === todoId);
      setCompletedTodos([...completedTodos, completedTodo]);
      onRemoveItem(completedTodo.id);

    } else {
      const todo = completedTodos.find((todo) => todo.id === todoId);
      setTodos([...todos, todo]);
      setCompletedTodos(completedTodos.filter((todo) => {
        return todo.id !== todoId;
      }));
    }

  }

  return (
    <div className="containeer">
      <h1>Todo app</h1>
      <TodoContext.Provider value={{ onRemoveItem, onCheckTodoItem }}>
        <div className="input-field">
          <input type="text"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyPress={onAddTodo}
            placeholder={"Todo name"}
          />
        </div>
        <TodoList items={todos} />

        {todos.length !== 0 &&
          <hr />
        }
        <TodoList items={completedTodos} />

      </TodoContext.Provider>
    </div>
  );
}
