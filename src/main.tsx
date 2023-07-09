import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>WIP NOT FOUND RIGHT NOW 404</h1>,
  },
  {
    path: "/post",
    element: <Post />,
    errorElement: <h1>WIP NOT FOUND RIGHT NOW 404</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
