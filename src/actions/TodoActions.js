import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

export default {
	create: function(value) {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_CREATE,
			value: value
		});
	},

	delete: function(id) {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_DELETE,
			id: id
		});
	},

	update: function(id, value) {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_UPDATE,
			id: id,
			value: value
		});
	}
}