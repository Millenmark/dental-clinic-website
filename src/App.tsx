import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import Appointment from "./components/appointment";
import MainLayout from "./layouts/main-layout";
import Confirm from "./components/confirm.tsx";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Treatments from "./components/treatments";
import Doctors from "./components/doctors";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import Contact from "./components/contact";

// Root route wraps the layout and renders nested routes via Outlet
const rootRoute = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});

// Index route → Home page
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

// Home route
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: Home,
});

// About route
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

// Services route
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

// Treatments route
const treatmentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/treatments",
  component: Treatments,
});

// Doctors route
const doctorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/doctors",
  component: Doctors,
});

// Testimonials route
const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/testimonials",
  component: Testimonials,
});

// Pricing route
const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pricing",
  component: Pricing,
});

// Contact route
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

// Appointment route
const appointmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/appointment",
  component: Appointment,
});

// Confirm route → handles token and redirects to backend
const confirmRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/confirm",
  component: Confirm,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  homeRoute,
  aboutRoute,
  servicesRoute,
  treatmentsRoute,
  doctorsRoute,
  testimonialsRoute,
  pricingRoute,
  contactRoute,
  appointmentRoute,
  confirmRoute,
]);

export default routeTree;
