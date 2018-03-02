export default function todoLists(state = [], action) {
    if (action.type === 'ADD_TODO_LIST') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'REMOVE_TODO_LIST') {
        return state;
    } else {
        return state;
    }
}