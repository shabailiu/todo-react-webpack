import React, {PropTypes, Component} from 'react';
import TodoItem from './TodoItem';
import TodoInput from '../containers/TodoInput';
import AddTodo from '../containers/AddTodo';
import _ from 'lodash';

class TodoList extends Component {
    render() {
        const {todos, currEditing, deleteTodo, setEditableTodo} = this.props;
        let items = [];

        _.each(todos, function(value, key) {
            if (key === currEditing) {
                items.push(<TodoInput
                    key={key}
                    id={key}
                    value={value.value}
                    autoFocus={true}
                />);
            } else {
                items.push(<TodoItem
                    key={key}
                    id={key}
                    value={value.value}
                    onDelete={() => deleteTodo(key)}
                    onClick={() => setEditableTodo(key)}
                />);
            }
        }.bind(this));

        return (
            <div id="list">
                <AddTodo
                    placeholder='Add item...'
                />
                {items}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.object.isRequired,
    currEditing: PropTypes.string,
    deleteTodo: PropTypes.func.isRequired,
    setEditableTodo: PropTypes.func
};

export default TodoList;