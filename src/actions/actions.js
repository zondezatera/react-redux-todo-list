import moment from 'moment';
let uid = 0;
export function addTodo(title, description) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: ++uid,
      isDone: false,
      title: title,
      description: description,
      createAt: moment().format('LLLL')
    }
  };
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    payload: id
  };
}

export function editTodo(id, data) {
  return {
    type: 'EDIT_TODO',
    payload: {
      id: id,
      data: data
    }
  };
}

export function markTodo(id) {
  return {
    type: 'MARK_TODO',
    payload: id
  };
}

export function markAll() {
  return {
    type: 'MARK_ALL'  
  };
}