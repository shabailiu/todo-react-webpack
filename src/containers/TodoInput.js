import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {updateTodo, setEditableTodo} from '../actions'

const ENTER_KEY_CODE = 13;

class TodoInput extends Component {
    constructor() {
        super();

        this._onKeyDown = this._onKeyDown.bind(this);
        this._onBlur = this._onBlur.bind(this);
    }

    componentDidMount() {
        this.refs.input.value = this.props.value;
    }

    _onKeyDown(event) {
        const value = this.refs.input.value.trim();
        if (event.keyCode === ENTER_KEY_CODE) {
            if (value && value !== this.props.value) {
                this.props.dispatch(updateTodo(this.refs.input.id, value));
            }

            this.props.dispatch(setEditableTodo(null));
        }
    }

    _onBlur(event) {
        const value = this.refs.input.value.trim();
        if (value && value !== this.props.value) {
            this.props.dispatch(updateTodo(this.refs.input.id, value));
        }

        this.props.dispatch(setEditableTodo(null));
    }

    render() {
        let input;

        return (
            <div className="item-new">
                <input
                    id={this.props.id}
                    type="text"
                    name="content"
                    ref="input"
                    className="input"
                    onKeyDown={this._onKeyDown}
                    onBlur={this._onBlur}
                    placeholder={this.props.placeholder}
                    autoFocus={this.props.autoFocus}
                />
            </div>
        );
    }
}


TodoInput.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool
};

TodoInput = connect()(TodoInput);

export default TodoInput;