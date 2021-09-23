import {ADD_TODO, TOGGLE_TODO, SET_FILTER} from './actionTypes';

let init_id = 0;

export const addTodo = (content) => {
    return {
        type : ADD_TODO,
        payload : {
            id : ++init_id,
            content : content,
            completed : false
        }
    }
}

export const toggleTodo = (id) => {
    return {
        type : TOGGLE_TODO,
        payload : {
            id : id
        }
    }
}

export const setFilter = (filter) => {
    return {
        type : SET_FILTER,
        payload : {
            filter: filter
        }
    }
}