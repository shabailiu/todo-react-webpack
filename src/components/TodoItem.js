import React, {PropTypes, Component} from 'react';

class TodoItem extends Component {

    _onDelete(onDelete, event) {
        event.stopPropagation(); // Prevent SET_EDITABLE_TODO action from being triggered
        onDelete();
    }

    render() {
        const {id, value, onDelete, onClick} = this.props;

        return (
            <div className="item" onClick={onClick}>
                <a
                    className="update-link"
                    title="Update this todo item"
                >{value}</a>
                <a
                    className="del-btn"
                    title="Delete this todo item"
                    onClick={this._onDelete.bind(null, onDelete)}
                >Delete</a>
            </div>
        );
    }
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};

export default TodoItem;