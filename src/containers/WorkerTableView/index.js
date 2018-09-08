import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bulma-components/lib/components/table';
import WorkersTableColumnsTitles from '../../components/WorkersTableColumnsTitles';
import WorkersTableRow from '../../components/WorkersTableRow';

class WorkersTableView extends Component {
  buildTableContent() {
    return this.props.workers.map((worker, i) => {
      return <WorkersTableRow worker={worker} key={worker.id} index={i + 1} />;
    });
  }
  render() {
    return (
      <Table>
        <thead>
          <WorkersTableColumnsTitles />
        </thead>
        <tfoot>
          <WorkersTableColumnsTitles />
        </tfoot>
        <tbody>{this.buildTableContent()}</tbody>
      </Table>
    );
  }
}
WorkersTableView.propTypes = {
  workers: PropTypes.array.isRequired
};
export default WorkersTableView;
