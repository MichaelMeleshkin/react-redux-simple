import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class App extends Component {
    addTodo() {
        if (this.todoInput.value) {
            this.props.onAddTodo(this.todoInput.value);
            this.todoInput.value = '';
            this.props.onResetFilter();
        }
    }

    filterTodo() {
        this.props.onFilterTodo(this.todoInput.value);
    }

    render() {
        console.log(this.props.ownProps);
        return (
            <div>
                <div>
                    <Link to="/">App</Link>
                    <Link to="/about">About</Link>
                </div>
                <input type="text"
                       ref={(input) => this.todoInput = input}
                       onKeyUp={this.filterTodo.bind(this)}/>
                <button onClick={this.addTodo.bind(this)}>Create todo</button>
                <ul>
                    {this.props.todos.map((todo, index) =>
                        <li key={index}>{todo}</li>
                    )}
                </ul>
                <button onClick={this.props.onGetTodos}>Get todos</button>
            </div>
        )
    }
}

const tasks = [
    'Create todo list',
    'Create first task',
    'Create complete first task'
];

export default connect(
    (state, ownProps) => ({
        todos: state.todos.filter(todo => todo.includes(state.filter)),
        ownProps
    }),
    dispatch => ({
        onAddTodo: (todo) => {
            dispatch({ type: 'ADD_TODO', payload: todo });
        },
        onFilterTodo: (todo) => {
            dispatch({ type: 'FILTER_TODO', payload: todo });
        },
        onResetFilter: () => {
            dispatch({ type: 'RESET_FILTER' });
        },
        onGetTodos: () => {
            const getTodos = () => {
                return dispatch => {
                    setTimeout(() => {
                        dispatch({ type: 'FETCH_TODOS', payload: tasks })
                    }, 3000)
                }
            };
            dispatch(getTodos());
        }
    })
)(App);