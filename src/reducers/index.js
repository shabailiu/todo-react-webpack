import {combineReducers} from 'redux';
import todos from './todos';
import currEditing from './currEditing';

const todoApp = combineReducers({
    todos,
    currEditing
});

export default todoApp;