import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WorkersTableView extends Component {
  extractContacts() {
    const contacts = this.props.worker.contacts;
    if (!contacts) {
      return <p className="content">no contacts provided</p>;
    }
    return (
      <p className="content">
        {Object.entries(contacts).map(pair => (
          <span>
            <b>{pair[0]}: </b>
            {pair[1]}
          </span>
        ))}
      </p>
    );
  }
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
      </tr>
    );
  }
}
WorkersTableView.propTypes = {
  worker: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};
export default WorkersTableView;
