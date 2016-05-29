import React, {PropTypes} from 'react';
import TodoItem from './TodoItem';
import TodoInput from '../containers/TodoInput';
import AddTodo from '../containers/AddTodo';
import _ from 'lodash';

const TodoList = ({todos, currEditing, deleteTodo, setEditableTodo}) => {
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
};

TodoList.propTypes = {
    todos: PropTypes.object.isRequired,
    currEditing: PropTypes.string
};

export default TodoList;