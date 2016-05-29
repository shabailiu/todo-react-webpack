const currEditing = (state = null, action) => {
    switch (action.type) {
    case 'SET_EDITABLE_TODO':
        return action.id;

    default:
        return state;
    }
};

export default currEditing;