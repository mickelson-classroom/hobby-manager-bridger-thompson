import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/custom.scss'
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ShowDetails } from './pages/ShowDetails';
import { Shows } from './pages/Shows';
import { NavBar } from './components/NavBar';
import ErrorBoundary from './components/ErrorBoundary';
import { ShowProvider } from './pages/ShowProvider';
import { ToastProvider } from './components/toast/toastContext';

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
      <ToastProvider>
        <ErrorBoundary>
          <ShowProvider>
            <RouterProvider router={router} />
          </ShowProvider>
        </ErrorBoundary>
      </ToastProvider>
    </div>
  </React.StrictMode>
);
