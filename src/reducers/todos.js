const todo = (state, action) => {
    switch (action.type) {
    case 'ADD_TODO':
    case 'UPDATE_TODO':
        return {
            [action.id]: {
                value: action.value
            }
        };

    default:
        return state;
    }
};

const todos = (state = {}, action) => {
    switch (action.type) {
    case 'ADD_TODO':
    case 'UPDATE_TODO':
        return Object.assign({}, state, todo(state, action));

    case 'DELETE_TODO':
        const newObj = Object.assign({}, state);
        delete newObj[action.id];
        return newObj;

    default:
        return state;
    }
};

export default todos;