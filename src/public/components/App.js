import React, {Component} from 'react';
import TodoList from './TodoList';

function getTodoState() {
    return {
        todos: JSON.parse(localStorage.getItem('todos'))
    };
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = getTodoState();

        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState(getTodoState());
    }

    render() {
        return (
            <div>
                <h1 id="page-title">My Todo List</h1>
                <TodoList todos={this.state.todos} onChange={this._onChange}/>
            </div>
        );
    }
}

export default App;