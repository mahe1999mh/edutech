import { useRoutes } from "react-router-dom";
import LandingPage from "../pages/landingPage/index";

function HomePage() {
  let route = useRoutes([
    {
      path: "/home",
      element: <LandingPage />,
    },
  ]);
    return route;
}

export default HomePage;
