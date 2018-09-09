import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WorkersTableView extends Component {
  extractContacts() {
    const contacts = this.props.worker.contacts;
    if (!contacts) {
      return <p className="content">no contacts provided</p>;
    }
    return (
      <div className="content">
        {Object.entries(contacts).map(pair => (
          <div key={pair[0]}>
            <b>{pair[0]}: </b>
            {pair[1]}
          </div>
        ))}
      </div>
    );
  }
  _handleDeleteClick = e => {
    e.preventDefault();
    if (this.props.onDeleteClick) {
      this.props.onDeleteClick(this.props.worker);
    }
  };
  render() {
    const { worker, index } = this.props;
    return (
      <tr>
        <th>{index}</th>
        <td>{worker.fullname}</td>
        <td>{worker.gender}</td>
        <td>{worker.position}</td>
        <td>{this.extractContacts()}</td>
        <td>{worker.salary}</td>
        <td>{new Date(worker.createdAt).toLocaleDateString()}</td>
        {this.props.onDeleteClick && (
          <td>
            <a
              className="button is-danger is-outlined"
              onClick={this._handleDeleteClick}
            >
              <span>Delete</span>
              <span className="icon is-small">
                <i className="fas fa-times" />
              </span>
            </a>
          </td>
        )}
      </tr>
    );
  }
}
WorkersTableView.propTypes = {
  worker: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};
export default WorkersTableView;
