import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Checkin from './pages/Checkin';
import Chat from './pages/Chat';
import Exercises from './pages/Exercises';
import Journal from './pages/Journal';
import Resources from './pages/Resources';
import Settings from './pages/Settings';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "checkin", element: <Checkin /> },
      { path: "chat", element: <Chat /> },
      { path: "exercises", element: <Exercises /> },
      { path: "journal", element: <Journal /> },
      { path: "resources", element: <Resources /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
