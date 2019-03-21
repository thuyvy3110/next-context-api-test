import React, { Component } from 'react';
import Context from '../config/Context';

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filters: {
        active: true,
        headerActive: false
      }
    };
  }

  render() {
    return (
      <Context.Provider>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
