import {
  Login,
  Register,
  Activation,
  HomePage,
  ProductsPage,
  EventsPage,
  BestSellingPage,
  ProductDetailsPage,
  FAQPage,
} from "./Pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/activation/:activation_token",
    element: <Activation />,
  },
  {
    path: "/sing-up",
    element: <Register />,
  },

  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/best-selling",
    element: <BestSellingPage />,
  },

  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "product/:name",
    element: <ProductDetailsPage />,
  },
]);
