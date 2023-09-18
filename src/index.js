import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";
import EditOrder from "./components/orders/EditOrder";
import AddOrder from "./components/orders/AddOrder";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutPage />}>
      <Route index path="" element={<HomePage />} />
      <Route path="order/edit/:id" element={<EditOrder />} />
      <Route path="order/new" element={<AddOrder />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
