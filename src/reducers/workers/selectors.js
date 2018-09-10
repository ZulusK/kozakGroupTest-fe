import { createSelector } from 'reselect';

const workers = state => state.workers;
const pagination = createSelector(
  workers,
  workersState => workersState.pagination
);
const filters = createSelector(workers, workersState => workersState.filters);

export const getFilters = filters;

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
