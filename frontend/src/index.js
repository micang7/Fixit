import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SearchPage from "./components/customer/searchPage/SearchPage";
import RequestPage from "./components/customer/requestPage/RequestPage";
import RepairPage from "./components/customer/repairPage/RepairPage";
import HomePage from "./components/repairman/homePage/HomePage";
import LoginPage from "./components/repairman/loginPage/LoginPage";
import RegisterPage from "./components/repairman/registerPage/RegisterPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <SearchPage /> },
      { path: "customer-request", element: <RequestPage /> },
      { path: "customer-repair", element: <RepairPage /> },
      { path: "repairman-home", element: <HomePage /> },
      { path: "repairman-login", element: <LoginPage /> },
      { path: "repairman-register", element: <RegisterPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
