import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./echo.ts";
import { RouterProvider, createRouter } from "@tanstack/react-router";

const queryClient = new QueryClient();

// Create a router instance (routes are defined in App.tsx and passed in)
const router = createRouter({
  routeTree: App,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
