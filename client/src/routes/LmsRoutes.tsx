import { Outlet, useRoutes } from "react-router-dom";
import IndexHome from "../pages/home/Index";
import MiniDrawer from "../layout/DashboardLayout";
import { Suspense } from "react";

export function LmsRoutes() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <MiniDrawer>
          <Suspense>
            <Outlet />
          </Suspense>
        </MiniDrawer>
      ),
      children: [
        { element: <IndexHome />, index: true },
        {
          path: "dashboard",
          element: <IndexHome />,
        },
        { path: "quiz", element: <IndexHome /> },
      ],
    },
    { path: "signin", element:<>login</> },
    { path: "signup", element:<>signup</> },
  ]);

  return element;
}
