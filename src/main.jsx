import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Checking from './pages/Checking';
import Chat from './pages/Chat';
import Exercices from './pages/Exercices';
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
      { path: "checkin", element: <Checking /> },
      { path: "chat", element: <Chat /> },
      { path: "exercises", element: <Exercices /> },
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
