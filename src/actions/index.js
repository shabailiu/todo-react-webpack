import uuid from 'uuid';

export const addTodo = (value) => {
    return {
        type: 'ADD_TODO',
        id: uuid.v4(),
        value
    };
};

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    };
};

export const updateTodo = (id, value) => {
    return {
        type: 'UPDATE_TODO',
        id,
        value
    };
};

export const setEditableTodo = (id) => {
    return {
        type: 'SET_EDITABLE_TODO',
        id
    };
};