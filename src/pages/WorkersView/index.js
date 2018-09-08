import React, { Component } from 'react';
import withMainLayout from '../../hoc/withMainLayout';
import withAuthRequired from '../../hoc/withAuthRequired';
import { selectors as authSelectors } from '../../reducers/auth';
import { connect } from 'react-redux';
import UserProfileView from '../../components/UserProfileView';
import { selectors as workerSelectors } from '../../reducers/workers';
import WorkerTableView from '../../components/WorkerTableView';

class WorkerView extends Component {
  render() {
    return (
      <div className="columns is-tablet">
        <div className="column is-6-desktop is-offset-3-desktop">
          <UserProfileView user={this.props.user} />
          <WorkerTableView workers={this.props.workers} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
  workers: workerSelectors.workersList(state)
});

export default connect(
  mapStateToProps,
  null
)(withAuthRequired(withMainLayout(WorkerView)));
