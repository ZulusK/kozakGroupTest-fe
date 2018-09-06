import React, { Component } from 'react';
// import style from './styles.scss';
import { Link } from 'react-router-dom';
import Navbar from 'react-bulma-components/lib/components/navbar';
import PropTypes from 'prop-types';

class HeaderButton extends Component {
  render() {
    return this.props.isShown ? (
      <Navbar.Item>
        <Link to={this.props.to}>{this.props.text}</Link>
      </Navbar.Item>
    ) : (
      <span />
    );
  }
}
HeaderButton.PropTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  isShown: PropTypes.bool
};
export default HeaderButton;
