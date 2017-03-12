
import React, { Component } from 'react';

export default class Filter extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <ul className="nav nav-pills" role="tablist">
          <li role="presentation" className="active">
            <a href="#">All <span className="badge">42</span></a>
          </li>
          <li role="presentation">
            <a href="#">Completed</a>
          </li>
          <li role="presentation">
            <a href="#">Active <span className="badge">3</span></a>
          </li>
        </ul>
      </div>
    );
  }
}
