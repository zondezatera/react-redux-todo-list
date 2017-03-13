import moment from 'moment';
export function addTodo(title, description) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: Math.random().toString(34).slice(2),
      isCompleted: false,
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

export function editTodo(id, data, type='title') {
  return {
    type: 'EDIT_TODO',
    payload: {
      id: id,
      type: type,
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

export function clearAll() {
  return {
    type: 'DELETE_ALL_TODOS'  
  };
}

export function changeFilter(filter) {
  return {
    type: 'CHANGE_FILTER',
    payload: filter
  };
}