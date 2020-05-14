import { BACKEND_URL } from '../config';

const API_URL = BACKEND_URL + '/api';
const GET_TODO_LIST_URL = API_URL + '/todo/todo-list';


export const fetchTodoList = () => {
    return fetch(GET_TODO_LIST_URL);
    //TODO: added excepton handling;
}