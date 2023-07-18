import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>WIP NOT FOUND RIGHT NOW 404</h1>,
  },
  {
    path: "/create_post",
    element: <CreatePost />,
    errorElement: <h1>WIP NOT FOUND RIGHT NOW 404</h1>,
  },
  {
    path: "/post/:id",
    element: <Post />,
    errorElement: <h1>WIP NOT FOUND RIGHT NOW 404</h1>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1>WIP NOT FOUND RIGHT NOW 404</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
