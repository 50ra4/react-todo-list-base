import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES, ErrorPage } from './routes';

export function App() {
  return (
    <div>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {ROUTES.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
