import { createStore } from 'redux';

function todoList(state = [], action) {
    if (action.type === 'ADD_TODO') {
        return [
            ...state,
            action.payload
        ];
    } else {
        return state;
    }
}

const store = createStore(todoList);

store.subscribe(() => {
    console.log('subscribe', store.getState());
    let root = document.querySelector('#root');
    root.innerHTML = '';
    let list = document.createElement('ul');
    store.getState().map((item) => {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
    root.appendChild(list);
});

store.dispatch({ type: 'ADD_TODO', payload: 'Create todo list'});
store.dispatch({ type: 'ADD_TODO', payload: 'Create first task'});
store.dispatch({ type: 'ADD_TODO', payload: 'Create complete first task'});