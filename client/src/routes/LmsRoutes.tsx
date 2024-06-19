import { Outlet, useRoutes, Navigate } from "react-router-dom";
import IndexHome from "../pages/home/Index";
import MiniDrawer from "../layout/DashboardLayout";
import { Suspense } from "react";
import Quiz from "../pages/quiz/Quiz";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

export function LmsRoutes() {
  const token = localStorage.getItem('token');

  const routes = useRoutes([
    {
      path: "/",
      element: token ? (
        <MiniDrawer>
          <Suspense>
            <Outlet />
          </Suspense>
        </MiniDrawer>
      ) : (
        <Navigate to="/signin" replace /> 
      ),
      children: [
        { element: <IndexHome />, index: true },
        {
          path: "dashboard",
          element: <IndexHome />,
        },
        { path: "quiz", element: <Quiz /> },
      ],
    },
    { path: "signin", element: <SignIn /> },
    { path: "signup", element: <SignUp /> },
  ]);

  return routes;
}
