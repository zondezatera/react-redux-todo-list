import React, { Component } from 'react';
import ListItem from '../item'
export default class List extends Component {
  constructor(props) {
    super(props);
    this.filterTodoList = this.filterTodoList.bind(this);
  }

  filterTodoList() {
    switch (this.props.activeFilter) {
      case 'completed':
        return this.props.todos.filter(todo => todo.get('isCompleted'));
      case 'active':
        return this.props.todos.filterNot(todo => todo.get('isCompleted'));
      default:
        return this.props.todos;
    }
  }

  hasTask(todoList){
    if (!todoList.size) {
      return(
        <div className="alert alert-info">
         <h5 className="text-center"> Empty </h5>
        </div>
      );
    } else {
      return(
        <ul key="task-list" className="list-group" >
          {todoList.map((task) => (
            <ListItem key={task.get('id')} task={task} {...this.props} />
          ))}
        </ul>
      );
    }
  }

  render() {
    const todoList = this.filterTodoList();
    return(
      <div>
        {this.hasTask(todoList)}
      </div>
    );
  }
}
