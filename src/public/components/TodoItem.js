import React, {Component, PropTypes} from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div
                className="item"
                onClick={this.props.onClick.bind(this, this.props.id)}
            >
                <a
                    className="update-link"
                    title="Update this todo item"
                >{this.props.value}</a>
                <a
                    className="del-btn"
                    title="Delete this todo item"
                    onClick={this.props.onDelete.bind(this, this.props.id)}
                >Delete</a>
            </div>
        );
    }
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};

export default TodoItem;