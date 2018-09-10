import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  selectors as workersSelectors,
  actions as workersActions
} from '../../reducers/workers';
import PropTypes from 'prop-types';

class WorkerFilterArea extends Component {
  state = {
    fullnameTimer: null,
    fullnameFilter: null,
    filters: {
      fullname: null,
      position: null
    }
  };
  handleFilterEntered = () => {
    this.props.updateFilters(this.state.filters);
    this.props.onAnyFilterUpdate();
    this.props.resetPagination();
  };
  handleFilterUpdate = name => e => {
    this.setState({
      filters: { [name]: e.target.value }
    });
  };
  startTimer = name => {
    return () => {
      clearTimeout(this.state[`${name}Timer`]);
      this.setState({
        [`${name}Timer`]: setTimeout(this.handleFilterEntered, 400)
      });
    };
  };
  render() {
    return (
      <div className="box columns is-tablet">
        <div className="column is-6-tablet">
          <label className="label">Fullname</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              onChange={this.handleFilterUpdate('fullname')}
              onKeyDown={this.startTimer('fullname')}
              type="text"
              defaultValue={this.props.filters.fullname}
              placeholder="Fullname to search"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
          </div>
        </div>
        <div className="column is-6-tablet">
          <label className="label">Fullname</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              defaultValue={this.props.filters.position}
              onChange={this.handleFilterUpdate('position')}
              onKeyDown={this.startTimer('position')}
              type="text"
              placeholder="Position to search"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-briefcase" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: workersSelectors.getFilters(state)
});

const mapDispatchToProps = dispatch => ({
  updateFilters: filters => dispatch(workersActions.updateFilters(filters)),
  resetPagination: () => dispatch(workersActions.resetPagination())
});

WorkerFilterArea.propTypes = {
  onAnyFilterUpdate: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkerFilterArea);
