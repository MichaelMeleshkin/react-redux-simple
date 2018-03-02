export default function filter(state = '', action) {
    if (action.type === 'FILTER_TODO') {
        return action.payload;
    } else if (action.type === 'RESET_FILTER') {
        return '';
    } else {
        return state;
    }
}