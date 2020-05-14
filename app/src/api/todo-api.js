import { BACKEND_URL } from '../config';

const API_URL = BACKEND_URL + '/api';
const GET_TODO_LIST_URL = API_URL + '/todo/todo-list';
const CREATE_TODO = API_URL + '/todo/todo';


export const fetchTodoList = () => {
    return fetch(GET_TODO_LIST_URL);
    //TODO: added excepton handling;
}

export const createTodo = (newTodo) => {
    return fetch(CREATE_TODO, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: newTodo.text,
        })
    });
}