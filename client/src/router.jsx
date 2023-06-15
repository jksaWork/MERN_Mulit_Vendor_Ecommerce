import { Login, Register, Activation, HomePage } from "./Pages";
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
]);
