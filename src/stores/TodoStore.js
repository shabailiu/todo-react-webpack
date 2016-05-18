import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';
import {EventEmitter} from 'events';
import uuid from 'uuid';

let _todos = {};
const CHANGE_EVENT = 'change';

function updateStorage() {
    localStorage.setItem('todos', JSON.stringify(_todos));
}

function addTodo(value) {
    const newUUID = uuid.v4();
    _todos[newUUID] = {
        value: value
    };
    updateStorage();
    console.log('Added new todo with UUID: ' + newUUID);
}

function removeTodo(id) {
    delete _todos[id];
    updateStorage();
    console.log('Removed todo with UUID: ' + id);
}

function updateTodo(id, value) {
    _todos[id] = {
        value: value
    };
    updateStorage();
    console.log('Updated todo with UUID: ' + id + ' with value: ' + value);
}

class TodoStoreClass extends EventEmitter {
    constructor() {
        super();

        _todos = JSON.parse(localStorage.getItem('todos'));
    }

    get todos() {
        return _todos;
    }

    // Emit Change event
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    // Add change listener
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    // Remove change listener
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

const TodoStore = new TodoStoreClass();

// Register callback with AppDispatcher
AppDispatcher.register((action) => {
    switch (action.actionType) {

    case TodoConstants.TODO_CREATE:
        addTodo(action.value);
        break;

    case TodoConstants.TODO_DELETE:
        removeTodo(action.id);
        break;

    case TodoConstants.TODO_UPDATE:
        updateTodo(action.id, action.value);

    default:
        return true;
    }

    // If action was responded to, emit change event
    TodoStore.emitChange();

    return true;
});

export default TodoStore;