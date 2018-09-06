import React, { Component } from 'react';
import './styles.scss';
import withMainLayout from '../../hoc/withMainLayout';
class WorkerCreation extends Component {
  render() {
    return (
      <div>
        <h1>WorkerCreation page</h1>
      </div>
    );
  }
}

export default withMainLayout(WorkerCreation);
