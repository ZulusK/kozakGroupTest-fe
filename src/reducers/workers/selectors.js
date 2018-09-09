import { createSelector } from 'reselect';

const workers = state => state.workers;
const pagination = createSelector(
  workers,
  workersState => workersState.pagination
);
export const workersList = createSelector(
  workers,
  workersState => workersState.workers
);
export const getCurrentPage = createSelector(
  pagination,
  paginationState => paginationState.page
);

export const getPageCount = createSelector(
  pagination,
  paginationState => paginationState.pageCount
);

export const getLimit = createSelector(
  pagination,
  paginationState => paginationState.limit
);
