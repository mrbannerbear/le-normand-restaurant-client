import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContext from "./context/AuthContext";

const queryClient = new QueryClient();

// React handles data through a single DOM node. In this case, it renders the whole app within 'root' <div> tag as seen in index.html.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router}>
          </RouterProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthContext>
  </React.StrictMode>
);
