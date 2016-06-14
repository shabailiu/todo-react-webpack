import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions'

const ENTER_KEY_CODE = 13;

class AddTodo extends Component {

    constructor() {
        super();

        this._onKeyDown = this._onKeyDown.bind(this);
    }

    _onKeyDown(event) {
        const input = this.refs.input;

        const value = input.value.trim();
        if (event.keyCode === ENTER_KEY_CODE && value) {
            this.props.dispatch(addTodo(value));
            input.value = '';
        }
    }

    render() {
        const {placeholder} = this.props;

        return (
            <div className="item-new">
                <input
                    type="text"
                    name="content"
                    ref="input"
                    className="input"
                    onKeyDown={this._onKeyDown}
                    placeholder={placeholder}
                />
            </div>
        );
    }
}

AddTodo.propTypes = {
    placeholder: PropTypes.string
};

AddTodo = connect()(AddTodo);

export default AddTodo;