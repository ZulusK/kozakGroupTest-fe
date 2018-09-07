import React, { Component } from 'react';
import { connect } from 'react-redux';
// import style from './styles.scss';
import * as authSelectors from '../../reducers/auth/selectors';
import * as authActions from '../../reducers/auth/actions';
import HeaderButton from '../../components/HeaderButton';

class Header extends Component {
  render() {
    return (
      <nav className="navbar is-link is-fixed-top" role="navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img
              src="https://react-etc.net/files/2017-12/react-hexagon.png"
              width="24"
            />
          </div>
          <HeaderButton to="/" text="Home" isShown />
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
          <HeaderButton
            text="logout"
            handleClick={this.props.logout}
            isShown={this.props.isAuthenticated}
          />
          <HeaderButton
            text="add worker"
            to="/add-worker"
            isShown={this.props.isAuthenticated}
          />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authActions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
