import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/custom.scss'
import 'bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ShowDetails } from './pages/ShowDetails';
import { Shows } from './pages/Shows';
import { NavBar } from './components/NavBar';
import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shows />
  },
  {
    path: "/show/:id",
    element: <ShowDetails />
  }
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar />
    <div className='my-3'>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </div>
  </React.StrictMode>
);
