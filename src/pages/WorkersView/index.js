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
import WorkersTablePagination from '../../containers/WorkersTablePagination';
import WorkerFilterArea from '../../containers/WorkerFilterArea';
class WorkerView extends Component {
  onButtonRefreshClick = e => {
    e.preventDefault();
    this.props.fetchWorkers();
  };
  onRowDelete = worker => {
    this.props.deleteWorker(worker.id);
  };
  render() {
    return (
      <div>
        <div className="columns is-tablet">
          <div className="column is-6-desktop is-offset-3-desktop">
            <UserProfileView user={this.props.user} />
          </div>
        </div>
        <a className="button is-info" onClick={this.onButtonRefreshClick}>
          Reload
        </a>
        <WorkerFilterArea onAnyFilterUpdate={this.props.fetchWorkers} />
        <WorkerTableView
          workers={this.props.workers}
          onRowDelete={this.onRowDelete}
        />
        <WorkersTablePagination onSetCurrentPage={this.props.fetchWorkers} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
  workers: workersSelectors.workersList(state)
});
const mapDispatchToProps = dispatch => ({
  fetchWorkers: () => dispatch(workersActions.getAllWorkers()),
  deleteWorker: workerId => dispatch(workersActions.deleteWorker(workerId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRequired(withMainLayout(WorkerView)));
