import React, { Component } from 'react';

class TableColumnsTitles extends Component {
  render() {
    return (
      <tr>
        <th>
          <abbr title="#">#</abbr>
        </th>
        <th>
          <abbr title="Gender">G</abbr>
        </th>
        <th>Full name</th>
        <th>Position</th>
        <th>Contacts</th>
        <th>Salary</th>
        <th title="created at">Cta</th>
      </tr>
    );
  }
}

export default TableColumnsTitles;
