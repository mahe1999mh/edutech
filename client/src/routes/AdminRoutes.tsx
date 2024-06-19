import { Outlet, Navigate } from "react-router-dom";
import IndexHome from "../pages/home/Index";
import MiniDrawer from "../layout/DashboardLayout";
import {  Suspense } from "react";
import Quiz from "../pages/quiz/Quiz";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import NotFoundView from "../components/404";
import LandingPage from "../pages/landingPage/index";
import ChartIndex from "../pages/chart/Index";


const AdminRoutes = (isLoggedIn:any) => {
  return [
    {
      path: "/",
      element: isLoggedIn ? (
        <MiniDrawer>
          <Suspense>
            <Outlet />
          </Suspense>
        </MiniDrawer>
      ) : (
        <Navigate to="/home" replace />
      ),
      children: [
        { element: <IndexHome />, index: true },
        { path: "dashboard", element: <ChartIndex/> }, 
        { path: "quiz", element: <Quiz /> },
        { path: "*", element:  <NotFoundView/> },
      ],
    },
    { path: "signin", element: <SignIn /> },
    { path: "signup", element: <SignUp /> },
    { path: "/home", element: <LandingPage /> },
    { path: "*", element:  <NotFoundView/> },
  ];
};

export default AdminRoutes;
