import React, { Component } from 'react';
import style from './styles.scss';
import withMainLayout from '../../hoc/withMainLayout';

class WorkerView extends Component {
  render() {
    return (
      <div>
        <h1>WorkerView page</h1>
      </div>
    );
  }
}

export default withMainLayout(WorkerView);
