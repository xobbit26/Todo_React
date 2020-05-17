import React, { useContext } from 'react';
import { TodoContext } from '../../../todoContext';
import { commonFormat } from '../../../utils/date-utils';

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './todo-item.css';

/**
 * React memo needs to get rid of memory leak
 * now TodoItem component is re-rendered only if todoItem property has been changed
 */
export const TodoItem = React.memo(({ todoItem }) => {
    const { onDeleteTodo, onCompleteTodo } = useContext(TodoContext);

    let checkBoxIcon = todoItem.completed
        ? faCheckSquare
        : faSquare

    return (
        <div className="row todo-item">
            <div className="col-md-2">
                <FontAwesomeIcon icon={checkBoxIcon} checked={todoItem.completed} onClick={() => onCompleteTodo(todoItem.id)} />
            </div>
            <div className="col-md-6 todo-item-text">
                {todoItem.text}
            </div>
            <div className="col-md-3">{commonFormat(todoItem.createdOn)}</div>
            <div className="col-md-1">
                <FontAwesomeIcon
                    className="todo-item-delete"
                    icon={faTrashAlt}
                    title="delete"
                    onClick={() => onDeleteTodo(todoItem.id)} />
            </div>
        </div>
    )
});