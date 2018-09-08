import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bulma-components/lib/components/table';
import TableColumnsTitles from '../TableColumnsTitles';

class WorkersTableView extends Component {
  render() {
    return (
      <Table>
        <thead>
          <TableColumnsTitles />
        </thead>
        <tfoot>
          <TableColumnsTitles />
        </tfoot>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                title="Leicester City F.C."
              >
                Leicester City
              </a>{' '}
              <strong>(C)</strong>
            </td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
            <td>68</td>
            <td>36</td>
            <td>+32</td>
            <td>81</td>
            <td>
              Qualification for the{' '}
              <a
                href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                title="2016–17 UEFA Champions League"
              >
                Champions League group stage
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
WorkersTableView.propTypes = {
  user: PropTypes.object.isRequired
};
export default WorkersTableView;
