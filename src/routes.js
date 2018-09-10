import * as pages from './pages';

export default [
  {
    path: '/',
    exact: true,
    component: pages.WorkersView
  },
  {
    path: '/add-worker',
    component: pages.WorkerCreation
  },
  {
    path: '/login',
    component: pages.Login
  },
  {
    path: '/signup',
    component: pages.Registration
  },
  {
    path: '/workers/:id',
    component: pages.WorkerUpdating
  },
  {
    component: pages.NotFound
  }
];
