import { List, Map } from 'immutable';

export default function todos(state = List() , action) {

  switch(action.type) {
    case 'ADD_TODO':
      return state.push(Map(action.payload));

    case 'REMOVE_TODO':
      return state.filter((todo) => {
         return todo.get('id') !== action.payload
        });

    case 'EDIT_TODO' :
      return state.map(todo => {
        if(todo.get('id') === action.payload.id) {
          return todo.update((t) => {
            return t.set('title', action.payload.data.title)
          });
        } else {
          return todo;
        }
      });

    case 'MARK_TODO' :
      return state.map(todo => {
        if(todo.get('id') === action.payload) {
          return todo.update('isCompleted', isCompleted => !isCompleted);
        } else {
          return todo;
        }
      });

    case 'MARK_ALL' :
      return state.map(todo => {
        return todo.update('isCompleted', isCompleted => !isCompleted);
      });

    case 'DELETE_ALL_TODOS' :
      return state.clear();

    default:
      return state;
  }
}