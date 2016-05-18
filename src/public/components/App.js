import React, {Component} from 'react';
import TodoList from './TodoList';
import TodoStore from '../../stores/TodoStore';

function getTodoState() {
    return {
        todos: TodoStore.todos
    };
}

class App extends Component {
    constructor(props) {
    	super(props);
    	this.state = getTodoState();

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(getTodoState());
    }

    render() {
        return (
            <div>
                <h1 id="page-title">My Todo List</h1>
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default App;