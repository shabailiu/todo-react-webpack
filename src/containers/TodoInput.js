import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {updateTodo, setEditableTodo} from '../actions'

const ENTER_KEY_CODE = 13;

class TodoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };

        this._onKeyDown = this._onKeyDown.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this._onChange = this._onChange.bind(this);
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

    _onChange(event) {
        this.setState({
            value: event.target.value
        });
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
                    onChange={this._onChange}
                    onBlur={this._onBlur}
                    value={this.state.value}
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