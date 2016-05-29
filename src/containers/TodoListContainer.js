import React from 'react';
import {connect} from 'react-redux';
import {addTodo, deleteTodo, updateTodo, setEditableTodo} from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        currEditing: state.currEditing
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (value) => {
            if (value) {
                dispatch(addTodo(value));
            }
        },
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));
        },
        updateTodo: (id, value) => {
            if (value) {
                dispatch(updateTodo(id, value));
            }
        },
        setEditableTodo: (id) => {
            dispatch(setEditableTodo(id));
        }
    };
};

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;