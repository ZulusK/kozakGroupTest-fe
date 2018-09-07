import React, { Component } from 'react';
import { connect } from 'react-redux';
// import style from './styles.scss';
import * as authSelectors from '../../reducers/auth/selectors';
import Navbar from 'react-bulma-components/lib/components/navbar';
import HeaderButton from '../../components/HeaderButton';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item href="/">Home</Navbar.Item>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <HeaderButton
              to="/login"
              text="Login"
              isShown={!this.props.isAuthenticated}
            />
            <HeaderButton
              to="/signup"
              text="Signup"
              isShown={!this.props.isAuthenticated}
            />
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
