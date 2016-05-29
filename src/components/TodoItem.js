import React, {PropTypes} from 'react';

function _onDelete(onDelete, event) {
    event.stopPropagation();
    onDelete();
}

const TodoItem = ({id, value, onDelete, onClick}) => (
    <div className="item" onClick={onClick}>
        <a
            className="update-link"
            title="Update this todo item"
        >{value}</a>
        <a
            className="del-btn"
            title="Delete this todo item"
            onClick={_onDelete.bind(null, onDelete)}
        >Delete</a>
    </div>
);

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};

export default TodoItem;