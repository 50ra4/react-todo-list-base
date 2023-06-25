import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const TopPage = lazy(() => import('src/presentation/pages/TopPage/TopPage'));
export const ErrorPage = lazy(
  () => import('src/presentation/pages/ErrorPage/ErrorPage'),
);

const ContactPage = lazy(
  () => import('src/presentation/pages/ContactPage/ContactPage'),
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
    path: '/contact',
    element: <ContactPage />,
  },
];
