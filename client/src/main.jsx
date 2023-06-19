import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store.js";
import { router } from "./router";
import { InitApp } from "./redux/actions/index.js";

const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitApp());
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <div className="">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <button onClick={notify}>Notify !</button> */}
      <AppContainer />
    </Provider>
  </React.StrictMode>
);
