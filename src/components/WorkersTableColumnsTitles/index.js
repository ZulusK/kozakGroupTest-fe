import React, { Component } from 'react';

class TableColumnsTitles extends Component {
  render() {
    return (
      <tr>
        <th>
          <abbr title="#">#</abbr>
        </th>
        <th>Full name</th>
        <th>
          <abbr title="Gender">G</abbr>
        </th>
        <th>Position</th>
        <th>Contacts</th>
        <th>Salary</th>
        <th>Created at</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    );
  }
}

export default TableColumnsTitles;
