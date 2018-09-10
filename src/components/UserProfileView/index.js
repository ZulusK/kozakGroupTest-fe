import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserProfileView extends Component {
  render() {
    return (
      <section className="hero is-warning is-small is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title ">
              Hello,
              {this.props.user.username}
              <br />
              {this.props.user.email}
            </h1>
          </div>
        </div>
      </section>
    );
  }
}
UserProfileView.propTypes = {
  user: PropTypes.object.isRequired
};
export default UserProfileView;
