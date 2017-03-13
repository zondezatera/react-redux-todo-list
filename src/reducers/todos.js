import { List, Map, fromJS } from 'immutable';

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
            if(action.payload.type == 'title') {
              return  t.set('title', action.payload.data.title);
            } else{ 
              return  t.set('description', action.payload.data.description);
            }
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

    case 'DELETE_ALL_TODOS' :
      return state.clear();

    case 'persist/REHYDRATE':
      return fromJS(action.payload.todoData) || state;

    default:
      return state;
  }
}