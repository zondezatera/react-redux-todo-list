import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
    const input = e.target;
    const text = input.value;
    const isEnterKey = (e.keyCode == 13);
    if(isEnterKey && (text.length > 0)) {
      input.value = '';
      this.props.addTodo(text);
    }
  }
  
  render() {
    return(
      <div>
        <input 
          type="text"
          className="form-control"
          placeholder="Add Your Task !"  
          onKeyDown={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}
