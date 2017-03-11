import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  removeTodo(id) {
    return this.props.removeTodo(id);
  }
  render() {
    return(
      <li key={this.props.task.get('id')} className="list-group-item">
        <div className="row">
          <div className="col-md-10">
            <h4 className="list-group-item-heading">{`id: ${this.props.task.get('id')}`}</h4>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn-default"  onClick={this.removeTodo.bind(this, this.props.task.get('id'))} >
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </div>
        </div>
        <p>
          <span>{this.props.task.get('text')}</span>
          <span>{this.props.task.get('createAt')}</span>
        </p>
      </li>
    );
  }
}
