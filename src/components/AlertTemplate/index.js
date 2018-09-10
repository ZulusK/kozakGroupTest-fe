import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlertTemplate extends Component {
  render() {
    const { options, message, close } = this.props;

    return (
      <div>
        {options.type === 'info' && '!'}
        {options.type === 'success' && ':)'}
        {options.type === 'error' && ':('}
        {message}
        <button onClick={close}>X</button>
      </div>
    );
  }
}

AlertTemplate.propTypes = {
  message: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired
};

export default AlertTemplate;
