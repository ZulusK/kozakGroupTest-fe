import React, { Component } from 'react';
// import style from './styles.scss';
import { Link } from 'react-router-dom';
import Navbar from 'react-bulma-components/lib/components/navbar';
import PropTypes from 'prop-types';

class HeaderButton extends Component {
  render() {
    return this.props.isShown ? (
      <Navbar.Item renderAs="a" href={this.props.to}>
        {this.props.text}
      </Navbar.Item>
    ) : (
      <span />
    );
  }
}
HeaderButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isShown: PropTypes.bool
};
export default HeaderButton;
