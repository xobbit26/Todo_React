import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Body from './components/body/Body';

import './App.css';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/todo/todo-list")
      .then(response => response.json())
      .then(data => {
        setTodoList(data);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Body todoList={todoList} />
    </div>
  )
}