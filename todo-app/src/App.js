import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import { TodoContext } from './context';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

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
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          isCompleted: false
        }]
      );
      setTodoTitle('');
    }
  }

  const onRemoveItem = (todoIdToRemove) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== todoIdToRemove;
    }));
  }

  const onCheckTodoItem = (todoId) => {
    setTodos(todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    }));
  }

  return (
    <div>
      <TodoContext.Provider value={{ onRemoveItem, onCheckTodoItem }}>
        <input type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
          onKeyPress={onAddTodo}
        />
        <TodoList items={todos} />
      </TodoContext.Provider>
    </div>
  );
}
