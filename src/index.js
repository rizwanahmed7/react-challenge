import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Edit, View, Create } from "./pages";
import { ContextProvider } from "./context/ContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <View />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/create",
    element: <Create />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
