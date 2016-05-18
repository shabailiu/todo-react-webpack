import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

const ENTER_KEY_CODE = 13;

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '' || props.value
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this._save = this._save.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.input).focus();
    }

    _save() {
        // Update todo
        if (this.props.id) {
            this.props.onSave(this.props.id, this.state.value);
        } else {
            this.props.onSave(this.state.value);
            this.setState({
                value: ''
            });
        }
    }

    _onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this._save();
        }
    }

    _onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
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
                    onBlur={this._save}
                    value={this.state.value}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}

TodoInput.propTypes = {
    id: PropTypes.string,
    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

export default TodoInput;