import ErrorBoundariesPage from "@/pages/ErrorBoundariesPage";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import Page404 from "@/pages/Page404";
import ReactErrorBoundaryPage from "@/pages/ReactErrorBoundaryPage";
import UseErrorBoundary from "@/pages/UseErrorBoundary";
import MainLayout from "@/widgets/layouts/MainLayout";

import { createBrowserRouter, Link } from "react-router";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
        handle: {
          title: "Home",
          hidden: false,
        },
      },
      {
        path: "/error-boundaries",
        element: <ErrorBoundariesPage />,
        handle: {
          title: "Error Boundaries",
          hidden: false,
        },
      },
      {
        path: "/react-error-boundary",
        element: <ReactErrorBoundaryPage />,
        handle: {
          title: "react-error-boundary",
          hidden: false,
        },
      },
      {
        path: "use-error-boundary",
        element: <UseErrorBoundary />,
        handle: {
          title: "useErrorBoundary",
          hidden: false,
        },
      },
      {
        path: "*",
        element: <Page404 />,
        handle: {
          title: "page 404",
          hidden: true,
        },
      },
    ],
  },
]);
export default router;
