import React, { useState, useEffect } from 'react';
import './index.css';
import TodoList from './TodoList';
import { TodoContext } from './context';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const todos = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];

    const completedTodos = localStorage.getItem('completedTodos')
      ? JSON.parse(localStorage.getItem('completedTodos'))
      : [];
    setTodos(todos);
    setCompletedTodos(completedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

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
    removeTodoById(todoIdToRemove);
  }

  const removeTodoById = (todoId) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== todoId;
    }));
  }

  const removeCompletedTodoById = (todoId) => {
    setCompletedTodos(completedTodos.filter((todo) => {
      return todo.id !== todoId;
    }));
  }

  const onCheckTodoItem = (id, isCompleted) => {
    if (!isCompleted) {
      const completedTodo = todos.find((todo) => todo.id == id);
      completedTodo.isCompleted = true;
      setCompletedTodos([...completedTodos, completedTodo]);
      removeTodoById(completedTodo.id);
      
    } else {
      const todo = completedTodos.find((todo) => todo.id == id);
      todo.isCompleted = false;
      setTodos([...todos, todo]);
      removeCompletedTodoById(todo.id)
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
