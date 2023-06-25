import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const TopPage = lazy(() => import('src/presentation/pages/TopPage/TopPage'));
export const ErrorPage = lazy(
  () => import('src/presentation/pages/ErrorPage/ErrorPage'),
);

const TaskInputPage = lazy(
  () => import('src/presentation/pages/TaskInputPage/TaskInputPage'),
);

export const ROUTES: RouteProps[] = [
  {
    path: '/',
    element: <TopPage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
  {
    path: '/tasks/new',
    element: <TaskInputPage />,
  },
];
