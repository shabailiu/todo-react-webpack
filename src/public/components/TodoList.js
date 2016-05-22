import React, {Component, PropTypes} from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import _ from 'lodash';
import uuid from 'uuid';

function updateStorage(todos, callback) {
    localStorage.setItem('todos', JSON.stringify(todos));
    callback();
}

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            currEditing: ''
        };

        this._addTodo = this._addTodo.bind(this);
        this._deleteTodo = this._deleteTodo.bind(this);
        this._updateTodo = this._updateTodo.bind(this);
        this._setEditableTodo = this._setEditableTodo.bind(this);
    }

    _addTodo(value) {
        if (value) {
            const newUUID = uuid.v4();
            let _todos = this.props.todos;
            _todos[newUUID] = {
                value: value
            };
            updateStorage(_todos, this.props.onChange);
            console.log('Added new todo with UUID: ' + newUUID);
        }
    }

    _deleteTodo(id) {
        let _todos = this.props.todos;
        delete _todos[id];
        updateStorage(_todos, this.props.onChange);
        console.log('Removed todo with UUID: ' + id);
    }

    _updateTodo(id, value) {
        if (id && value) {
            let _todos = this.props.todos;
            _todos[id] = {
                value: value
            };
            updateStorage(_todos, this.props.onChange);
            console.log('Updated todo with UUID: ' + id + ' with value: ' + value);
        }
        this.setState({
            currEditing: ''
        });
    }

    _setEditableTodo(id) {
        this.setState({
            currEditing: id
        });
    }

    render() {
        let items = [];
        _.each(this.props.todos, function(value, key) {
            if (key === this.state.currEditing) {
                items.push(<TodoInput
                    key={key}
                    id={key}
                    value={value.value}
                    onSave={this._updateTodo}
                />);
            } else {
                items.push(<TodoItem
                    key={key}
                    id={key}
                    value={value.value}
                    onDelete={this._deleteTodo}
                    onClick={this._setEditableTodo}
                />);
            }
        }.bind(this));

        return (
            <div id="list">
                <TodoInput
                    onSave={this._addTodo}
                    placeholder='Add item...'
                />
                {items}
            </div>
        );
    }
}

export default TodoList;