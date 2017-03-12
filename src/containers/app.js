import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, markTodo, editTodo, changeFilter } from '../actions';
import Form from '../components/form';
import List from '../components/list';
import Filter from '../components/filter';

export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="well" style={{width:"600px",margin: "100px auto"}}>
        <h3>Reminders</h3>
        <Form addTodo={this.props.addTodo} />
        <Filter activeFilter={this.props.activeFilter} changeFilter={this.props.changeFilter} />
        <List todos={this.props.todos} {...this.props} />
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state.todoData,
    activeFilter: state.filterData
  }),
  {
    addTodo,
    removeTodo,
    markTodo,
    editTodo,
    changeFilter
  }
)(App);
