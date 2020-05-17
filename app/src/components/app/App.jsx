import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Body from '../body/Body';
import { fetchTodoList, createTodo, deleteTodo, updateTodo } from '../../api/todo-api';
import { TodoContext } from '../../todoContext';

var moment = require('moment');

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

	function onCreateTodo(todoText) {
		createTodo({ text: todoText })
			.then(() => getTodoList());
	}

	function onDeleteTodo(todoId) {
		deleteTodo(todoId)
			.then(() => getTodoList());
	}

	function onCompleteTodo(todoId) {
		const todoToUpdate = todoList.find(x => x.id === todoId);
		
		const completedDateTime = moment();
		todoToUpdate.completedOn = completedDateTime;
		todoToUpdate.updatedOn = completedDateTime;
		todoToUpdate.completed = !todoToUpdate.completed;

		updateTodo(todoId, todoToUpdate)
			.then(() => getTodoList());
	}

	return (
		<div className="app">
			<Header />
			<TodoContext.Provider value={{
				todoList, onCreateTodo, onDeleteTodo, onCompleteTodo
			}}>
				<Body />
			</TodoContext.Provider>
		</div>
	)
}