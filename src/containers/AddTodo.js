import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions'

const ENTER_KEY_CODE = 13;

let AddTodo = ({dispatch, placeholder}) => {
    let input;

    function _onKeyDown(event) {
        const value = input.value.trim();
        if (event.keyCode === ENTER_KEY_CODE && value) {
            dispatch(addTodo(value));
            input.value = '';
        }
    }

    function _onBlur(event) {
        const value = input.value.trim();
        if (value) {
            dispatch(addTodo(value));
        }
    }

    return (
        <div className="item-new">
            <input
                type="text"
                name="content"
                ref={node => {
                    input = node;
                }}
                className="input"
                onKeyDown={_onKeyDown}
                onBlur={_onBlur}
                placeholder={placeholder}
            />
        </div>
    );
};

AddTodo.propTypes = {
    placeholder: PropTypes.string
};

AddTodo = connect()(AddTodo);

export default AddTodo;