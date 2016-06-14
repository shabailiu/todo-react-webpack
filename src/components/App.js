import React, {Component} from 'react';
import TodoListContainer from '../containers/TodoListContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1 id="page-title">My Todo List</h1>
                <TodoListContainer />
            </div>
        );
    }
}