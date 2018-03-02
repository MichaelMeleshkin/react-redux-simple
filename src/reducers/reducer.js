import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import todos from './todos';
import todoLists from './todoLists';
import filter from './filter';

export default combineReducers({
    routing: routerReducer,
    todos,
    todoLists,
    filter
})