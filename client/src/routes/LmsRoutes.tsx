
import { useRoutes } from "react-router-dom";
import IndexHome from "../pages/home/Index";
import MiniDrawer from "../layout/DashboardLayout";

export function LmsRoutes() {
  let element = useRoutes([
    {
      path: "/",
      element: <MiniDrawer />,
      children: [
        {
          path: "messages",
          element: <IndexHome />,
        },
        { path: "tasks", element: <IndexHome /> },
      ],
    },
    { path: "team", element: <MiniDrawer /> },
  ]);

  return element;
}