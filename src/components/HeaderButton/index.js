import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderButton extends Component {
  render() {
    return this.props.isShown ? (
      <a
        className="navbar-item"
        href={this.props.to}
        onClick={this.props.handleClick}
      >
        {this.props.text}
      </a>
    ) : (
      <span />
    );
  }
}
HeaderButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  isShown: PropTypes.bool
};
export default HeaderButton;
