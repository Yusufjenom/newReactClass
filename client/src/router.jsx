import { createBrowserRouter } from "react-router-dom";
import Products from "./modules/products";
import Test from "./modules/products/test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
