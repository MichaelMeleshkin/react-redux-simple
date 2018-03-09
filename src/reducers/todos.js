export default function todos(state = [], action) {
    if (action.type === 'ADD_TODO') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'FETCH_TODOS') {
        return [
            ...action.payload
        ];
    } else if (action.type === 'TODOS_ERROR') {
        console.error(action.payload);
        return state;
    } else if (action.type === 'REMOVE_TODO') {
        return state;
    } else {
        return state;
    }
}