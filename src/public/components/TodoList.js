import React, {Component, PropTypes} from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import _ from 'lodash';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            currEditing: ''
        };

        this._setEditableTodo = this._setEditableTodo.bind(this);
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
                    onSave={(...args) => {
                        this.props.onUpdateTodo(...args);
                        this._setEditableTodo('');
                    }}
                />);
            } else {
                items.push(<TodoItem
                    key={key}
                    id={key}
                    value={value.value}
                    onDelete={this.props.onDeleteTodo}
                    onClick={this._setEditableTodo}
                />);
            }
        }.bind(this));

        return (
            <div id="list">
                <TodoInput
                    onSave={this.props.onAddTodo}
                    placeholder='Add item...'
                />
                {items}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.object.isRequired,
    onAddTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onUpdateTodo: PropTypes.func.isRequired
};

export default TodoList;