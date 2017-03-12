import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeWord(e) {
    const input = e.target;
    const text = input.value;
    if(input.name === 'title') {
      this.setState({ title: text});
    } else {
      this.setState({ description: text });
    }
  }

  onSubmit() {
    const title = this.state.title;
    const description = this.state.description;
    this.setState({ title: '', description: '' });
    this.props.addTodo(title, description);
  }
  
  render() {
    return(
      <div className="well">
        <div className="form-group">
          <label>Add Task</label>
          <input 
            name="title"
            type="text"
            className="form-control"
            placeholder="Add Your Title"
            onChange={this.onChangeWord.bind(this)}
            value={this.state.title}
          />
          <textarea
            name="description"
            type="text"
            className="form-control"
            placeholder="Add Your Description"
            onChange={this.onChangeWord.bind(this)}
            value={this.state.description}
          >
          </textarea>
        </div>
        <button 
          type="button"
          className="btn btn-success"
          onClick={this.onSubmit.bind(this)}
        >
          Submit
        </button>
      </div>
    );
  }
}
