import React, { Component } from 'react';
import withMainLayout from '../../hoc/withMainLayout';
import withAuthRequired from '../../hoc/withAuthRequired';
import { selectors as authSelectors } from '../../reducers/auth';
import { connect } from 'react-redux';
import UserProfileView from '../../components/UserProfileView';
import {
  selectors as workersSelectors,
  actions as workersActions
} from '../../reducers/workers';
import WorkerTableView from '../../containers/WorkerTableView';

class WorkerView extends Component {
  onButtonRefreshClick = e => {
    e.preventDefault();
    this.props.fetchWorkers();
  };
  componentDidMount = () => {
    this.props.fetchWorkers();
  };
  render() {
    return (
      <div>
        <a class="button is-info" onClick={this.onButtonRefreshClick}>
          Reload
        </a>
        <div className="columns is-tablet">
          <div className="column is-6-desktop is-offset-3-desktop">
            <UserProfileView user={this.props.user} />
          </div>
        </div>
        <WorkerTableView workers={this.props.workers} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
  workers: workersSelectors.workersList(state)
});
const mapDispatchToProps = dispatch => ({
  fetchWorkers: () => dispatch(workersActions.getAllWorkers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRequired(withMainLayout(WorkerView)));
