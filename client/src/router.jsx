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
  ProfilePage,
  SallerActivation,
  CreateSaller,
  SallerLogin,
  Dashboard,
  ShowShop,
  CreateproductPage,
  DashBoardProductsPage,
  CreateEventPage,
  DashboardEventsPage,
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
    path: "/shop/login",
    element: <SallerLogin />,
  },

  {
    path: "/activation/:activation_token",
    element: <Activation />,
  },
  {
    path: "/saller/activation/:activation_token",
    element: <SallerActivation />,
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
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "create-shop",
    element: <CreateSaller />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "/shop/:id",
    element: <ShowShop />,
  },
  {
    path: "/dashboard/product/create",
    element: <CreateproductPage />,
  },
  {
    path: "/dashboard/products",
    element: <DashBoardProductsPage />,
  },
  {
    path: "/dashboard/events/create",
    element: <CreateEventPage />,
  },
  {
    path: "/dashboard/events",
    element: <DashboardEventsPage />,
  },
]);
