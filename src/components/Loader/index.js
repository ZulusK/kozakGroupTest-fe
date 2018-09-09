import React, { Component } from 'react';
import './styles.scss';

class WrappedLoader extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <div className="loader-container">
          <div className="loader" />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default WrappedLoader;
