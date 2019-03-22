import React, { Component } from 'react';
import Context from '../config/Context';

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filters: {
        active: true
      }
    };
  }

  render() {
    const { value } = this.props;
    return (
      <Context.Provider
        value={{
          ...this.props,
          state: this.state,
          toggleActive: () => this.setState({ 
            filters: {
              active: !this.state.filters.active
            }
          })
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
