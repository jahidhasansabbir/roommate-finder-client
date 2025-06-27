import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import GeneralProvider from "./context/GeneralContext/GeneralProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <GeneralProvider>
        <RouterProvider router={router} />
      </GeneralProvider>
    </AuthProvider>
  </StrictMode>
);
