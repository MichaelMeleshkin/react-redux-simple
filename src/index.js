import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import './index.css';
import App from './components/app';
import About from './components/about';

/*let todos = [
    'Create todo list',
    'Create first task',
    'Create complete first task'
];

function todoList(state = todos, action) {
    if (action.type === 'ADD_TODO') {
        return [
            ...state,
            action.payload
        ];
    } else {
        return state;
    }
}*/
import reducer from './reducers/reducer';
const history = createHistory();
const middleware = routerMiddleware(history);

const simpleStore = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)));
// const simpleStore = createStore(todoList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const simpleStore = createStore(reducer);

ReactDOM.render(
    <Provider store={simpleStore}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path='/' component={App}/>
                <Route path='/about' component={About}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);