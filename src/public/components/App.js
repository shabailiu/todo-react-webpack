import React, {Component} from 'react';
import TodoList from './TodoList';
import uuid from 'uuid';

// Keep a local copy of todos for performance reasons - we don't want to have to
// pull todos from the database each time.
let _todos = JSON.parse(localStorage.getItem('todos'));

function getTodoState() {
    return {
        todos: _todos
    };
}

function updateStorage(todos, callback) {
    localStorage.setItem('todos', JSON.stringify(todos));
    callback();
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = getTodoState();

        this._onChange = this._onChange.bind(this);
        this._addTodo = this._addTodo.bind(this);
        this._deleteTodo = this._deleteTodo.bind(this);
        this._updateTodo = this._updateTodo.bind(this);
    }

    _onChange() {
        this.setState(getTodoState());
    }

    _addTodo(value) {
        if (value) {
            const newUUID = uuid.v4();
            _todos[newUUID] = {
                value: value
            };
            updateStorage(_todos, function(err, res) {
                this._onChange();
                console.log('Added new todo with UUID: ' + newUUID);
            }.bind(this));
        }
    }

    _deleteTodo(id) {
        delete _todos[id];
        updateStorage(_todos, function(err, res) {
            this._onChange();
            console.log('Removed todo with UUID: ' + id);
        }.bind(this));
    }

    _updateTodo(id, value) {
        if (id && value) {
            _todos[id] = {
                value: value
            };
            updateStorage(_todos, function() {
                this._onChange();
                console.log('Updated todo with UUID: ' + id + ' with value: ' + value);
            }.bind(this));
        }
    }

    render() {
        return (
            <div>
                <h1 id="page-title">My Todo List</h1>
                <TodoList
                    todos={this.state.todos}
                    onAddTodo={this._addTodo}
                    onDeleteTodo={this._deleteTodo}
                    onUpdateTodo={this._updateTodo}
                />
            </div>
        );
    }
}

export default App;