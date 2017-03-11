import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <h3>{this.props.title}</h3>
    );
  }
}
