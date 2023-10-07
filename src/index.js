import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import ProjectDetails from "./components/ProjectDetails";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    //the tokens will be visible in home page itself
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
