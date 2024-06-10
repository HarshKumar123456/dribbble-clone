import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import "./index.css";

import PageNotFound from './components/Error/PageNotFound.jsx';
import SignUp from './pages/Authorization/SignUp.jsx';
import CreateProfile from './pages/Authorization/CreateProfile.jsx';
import Interests from './pages/Authorization/Interests.jsx';
import SignIn from './pages/Authorization/SignIn.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <SignIn />,
  },
  {
    path: "create-profile",
    element: <CreateProfile />,
  },
  {
    path: "interests",
    element: <Interests />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
