import { Outlet, useRoutes } from "react-router-dom";
import IndexHome from "../pages/home/Index";
import MiniDrawer from "../layout/DashboardLayout";
import { Suspense } from "react";
import Quiz from "../pages/quiz/Quiz";
import LoginView from "../pages/auth/SignIn";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

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
        { path: "quiz", element: <Quiz /> },
      ],
    },
    { path: "signin", element: <SignIn/> },
    { path: "signup", element: <SignUp/> },
  ]);

  return element;
}
