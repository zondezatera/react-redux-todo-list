import React, { Component } from 'react';
import ListItem from '../item'
export default class List extends Component {
  constructor(props) {
    super(props);
  }

  hasTask(){
    if (!this.props.todos.size) {
      return(
        <div className="alert alert-info">
         <h5 className="text-center"> Empty </h5>
        </div>
      );
    } else {
      return(
        <ul key="task-list" className="list-group" >
          {this.props.todos.map((task) => (
            <ListItem key={task.get('id')} task={task} removeTodo={this.props.removeTodo} />
          ))}
        </ul>
      );
    }
  }

  render() {
    return(
      <div>
        {this.hasTask()}
      </div>
    );
  }
}
