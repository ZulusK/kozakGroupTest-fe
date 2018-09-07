import { createSelector } from 'reselect';

const workers = state => state.workers;

export const workersList = createSelector(
  workers,
  workersState => workersState.workers
);
