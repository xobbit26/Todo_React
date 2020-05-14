import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Body from '../body/Body';
import { fetchTodoList } from '../../api/todo-api';

import './app.css';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => { getTodoList() }, []);

  function getTodoList() {
    fetchTodoList()
      .then(response => response.json())
      .then(data => {
        setTodoList(data);
      });
  }

  return (
    <div className="app">
      <Header />
      <Body todoList={todoList} />
    </div>
  )
}