import React, { useContext } from 'react';
import { TodoItem } from './todo-item/TodoItem';
import { TodoContext } from '../../todoContext';

import './todo-list.css';

export default function TodoList({ completedTodos }) {
	const { todoList } = useContext(TodoContext);

	return (
		<div>
			{todoList.map((item) => {
				if (item.completed !== completedTodos) {
					return (
						<TodoItem key={item.id} todoItem={item} />
					)
				}
			})}
		</div>
	)
}