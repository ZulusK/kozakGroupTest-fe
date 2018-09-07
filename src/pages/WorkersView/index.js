import React, { Component } from 'react';
import withMainLayout from '../../hoc/withMainLayout';
import withAuthRequired from '../../hoc/withAuthRequired';
import withNotifications from '../../hoc/withNotifications';
import { selectors as authSelectors } from '../../reducers/auth';
import { connect } from 'react-redux';
import UserProfileView from '../../components/UserProfileView';

class WorkerView extends Component {
  render() {
    return (
      <div className="columns is-tablet">
        <div className="column is-6-desktop is-offset-3-desktop">
          <UserProfileView user={this.props.user} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: authSelectors.getUser(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRequired(withMainLayout(withNotifications(WorkerView))));
