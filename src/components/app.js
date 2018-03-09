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

    componentDidMount() {
        this.props.onGetTodos();
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
                    {this.props.todos.sort().map((todo, index) =>
                        <li key={index}>{todo}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({
        todos: state.todos.filter(todo => todo.includes(state.filter)),
        ownProps
    }),
    dispatch => ({
        onAddTodo: (todo) => {
            const addTodos = () => {
                return dispatch => {
                    return fetch('/insert', {
                        method: "POST",
                        body: JSON.stringify({todo: todo}),
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then((response) => {
                        let q = 1;
                        if(response.status == 200){
                            dispatch({ type: 'ADD_TODO', payload: todo });
                        } else {
                            dispatch({ type: 'TODOS_ERROR', payload: "addTodos error" })
                        }
                    });
                }
            };
            dispatch(addTodos());
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
                    return fetch('/fetch', {
                        method: "POST",
                        headers: {'Content-Type': 'application/json'}
                    })
                    .then((response) => {
                        if(response.status == 200){
                            let fetchedTodos = [];
                            response.json().then((todos) => {
                                todos.map((todo) => {
                                    fetchedTodos.push(todo.todo);
                                });
                                dispatch({ type: 'FETCH_TODOS', payload: fetchedTodos })
                            });
                        } else {
                            dispatch({ type: 'TODOS_ERROR', payload: "getTodos error" })
                        }
                    });
                }
            };
            dispatch(getTodos());
        }
    })
)(App);