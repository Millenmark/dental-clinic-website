import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import Appointment from "./components/appointment";
import MainLayout from "./layouts/main-layout";
import Confirm from "./components/confirm.tsx";

// Root route wraps the layout and renders nested routes via Outlet
const rootRoute = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});

// Index route → Appointment page
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Appointment,
});

// Confirm route → handles token and redirects to backend
const confirmRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/confirm",
  component: Confirm,
});

const routeTree = rootRoute.addChildren([indexRoute, confirmRoute]);

export default routeTree;
