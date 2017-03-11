let uid = 0;
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: ++uid,
      isDone: false,
      text: text,
      createAt: Date.now()
    }
  };
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    payload: id
  };
}

export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    payload: {
      id: id,
      text: text,
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