import React, { useContext } from 'react';
import { TodoContext } from '../../../todoContext';
import { commonFormat } from '../../../utils/date-utils';

import './todo-item.css';

/**
 * React memo needs to get rid of memory leak
 * now TodoItem component is re-rendered only if todoItem property has been changed
 */
export const TodoItem = React.memo(({ todoItem }) => {
    const { onDeleteTodo } = useContext(TodoContext);

    return (
        <div className="row todo-item">
            <div className="col-md-2">
                <input type="checkbox" checked={todoItem.completed} />
            </div>
            <div className="col-md-6 todo-item-text">
                <p>{todoItem.text}</p>
            </div>
            <div className="col-md-3">{commonFormat(todoItem.createdOn)}</div>
            <div className="col-md-1">
                <a type="link" title="delete" onClick={() => onDeleteTodo(todoItem.id)}>x</a>
            </div>
        </div>
    )
});