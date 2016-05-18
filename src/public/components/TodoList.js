import React, {Component, PropTypes} from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoActions from '../../actions/TodoActions';
import _ from 'lodash';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            currEditing: ''
        };

        this._setEditableTodo = this._setEditableTodo.bind(this);
        this._updateTodo = this._updateTodo.bind(this);
    }

    _addTodo(value) {
        if (value) {
            TodoActions.create(value);
        }
    }

    _deleteTodo(id) {
        TodoActions.delete(id);
    }

    _updateTodo(id, value) {
        if (id && value) {
            TodoActions.update(id, value);
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