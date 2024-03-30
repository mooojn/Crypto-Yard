import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './routes/Root.jsx'
import ErrorPage from "./routes/ErrorPage.jsx"

const router = createBrowserRouter([
  {path: "/", element: <Root />},
  {path: "*", element: <ErrorPage />}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);