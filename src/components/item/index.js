import React, { Component } from 'react';
import InlineEdit from 'react-edit-inline';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.task.get('title'),
      description: this.props.task.get('description')
    };
    this.textChanged = this.textChanged.bind(this);
  }
  markTodo(id) {
    return this.props.markTodo(id);
  }
  removeTodo(id) {
    return this.props.removeTodo(id);
  }
  textChanged(data) {
    this.setState({...data});
    return this.props.editTodo(this.props.task.get('id') ,{...data});
  }
  renderContent(type) {
    let content = '';
    if(type === 'title') {
      content = this.state.title;
    } else { 
      content = this.state.description;
    }
    if(this.props.task.get('isDone')) {
      return(
        <s>{content}</s>
      );
    } else {
      return(
        <InlineEdit
          paramName={type}
          text={content}
          activeClassName="form-control"
          change={this.textChanged}
        />
      );
    }
  }

  render() {
    return(
      <li key={this.props.task.get('id')} className="list-group-item">
        <div className="row">
          <div className="col-md-1">
            <input type="checkbox" onChange={this.markTodo.bind(this, this.props.task.get('id'))} />
          </div>
          <div className="col-md-9">
            <h4 className="list-group-item-heading">{this.renderContent.call(this, 'title')}</h4>
            <p>
              {this.renderContent.call(this, 'description')}
            </p>
            <p className="text-right">
              <small>{this.props.task.get('createAt')}</small>
            </p>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn-default"  onClick={this.removeTodo.bind(this, this.props.task.get('id'))} >
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </div>
        </div>
      </li>
    );
  }
}
