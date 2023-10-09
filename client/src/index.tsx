// Your main application file (e.g., App.tsx)
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/custom.scss";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";
import { ShowDetails } from "./pages/shows/ShowDetails";
import { ShowProvider } from "./components/context/showContext";
import { Shows } from "./pages/shows/Shows";
import { Toasts } from "./pages/toasts/Toasts";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ToastList from "./components/toast/ToastList";
import { Animation } from "./pages/animation/Animation";
import { MobileNavBar } from "./components/nav/MobileNavBar";
import { Tanstack } from "./pages/tanstack-example/Tanstack";
import { QueryClientProvider } from "@tanstack/react-query";
import { GetQueryClient } from "./queryClient";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = GetQueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ShowProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <NavBar />
            <div className="my-3 overflow-auto flex-grow-1 justify-content-between">
              <ErrorBoundary>
                <Routes>
                  <Route path="/" element={<Shows />} />
                  <Route path="/show/:id" element={<ShowDetails />} />
                  <Route path="/toasts" element={<Toasts />} />
                  <Route path="/animation" element={<Animation />} />
                  <Route path="/tanstack" element={<Tanstack />} />
                </Routes>
                <ToastList />
              </ErrorBoundary>
            </div>
            <MobileNavBar />
          </Router>
        </QueryClientProvider>
      </ShowProvider>
    </Provider>
  </React.StrictMode>
);
