// Your main application file (e.g., App.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/custom.scss';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import ErrorBoundary from './components/ErrorBoundary';
import { ToastProvider } from './components/context/toastContext';
import { ShowDetails } from './pages/shows/ShowDetails';
import { ShowProvider } from './components/context/showContext';
import { Shows } from './pages/shows/Shows';
import { Toasts } from './pages/toasts/Toasts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ToastProvider>
      <ErrorBoundary>
        <ShowProvider>
          <Router>
            <NavBar />
            <div className='my-3'>
              <Routes>
                <Route path="/" element={<Shows />} />
                <Route path="/show/:id" element={<ShowDetails />} />
                <Route path="/toasts" element={<Toasts />} />
              </Routes>
            </div>
          </Router>
        </ShowProvider>
      </ErrorBoundary>
    </ToastProvider>
  </React.StrictMode>
);
