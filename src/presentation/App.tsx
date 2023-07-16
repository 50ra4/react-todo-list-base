import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES, ErrorPage } from './routes';

const router = createBrowserRouter(
  [
    ...ROUTES.map(({ path, element }) => ({
      path,
      element,
    })),
    { path: '*', element: <ErrorPage /> },
  ],
  { basename: import.meta.env.BASE_URL },
);

export function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}
