import { List, Map } from 'immutable';

const init = List();

export default function reducer(state = init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return state.push(Map(action.payload));
    case 'REMOVE_TODO':
      return state.filter(todo => todo.get('id') !== action.payload);
    case 'EDIT_TODO' :
      return state
    case 'MARK_TODO' :
      return state
    case 'MARK_ALL' :
      return state
    default:
      return init;
  }
}