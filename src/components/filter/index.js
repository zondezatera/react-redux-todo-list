
import React, { Component } from 'react';
import cn from 'classnames';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.filters = ['all', 'completed', 'active'];
  }
  
  changeFilter(filter) {
    this.props.changeFilter(filter);
  }

  render() {
    return(
      <div style={{margin:"5px 0"}}>
        <div className="btn-group">
          {
            this.filters.map(filter => {
              const className = cn('btn btn-default capitalize', {
                active: this.props.activeFilter === filter,
              });
              return (
                <button key={filter} className={className} onClick={this.changeFilter.bind(this,filter)}>
                  <span className="text-capitalize">{filter}</span>
                  {/*<span className="badge">0</span>*/}
                </button>
              );
            })
          }
        </div>
      </div>
    );
  }
}
