import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../actions/actions';
import Header from '../components/header'
import Form from '../components/form';
import List from '../components/list';

export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="well" style={{width:"600px",margin: "100px auto"}}>
        <Header title="Reminders" />
        <Form addTodo={this.props.addTodo} />
        <List todos={this.props.todos} removeTodo={this.props.removeTodo} />
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: state
  }),
  {
    addTodo,
    removeTodo
  }
)(App);
