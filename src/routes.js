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
    path: '/registration',
    component: pages.Registration
  },
  {
    component: pages.NotFound
  }
];
