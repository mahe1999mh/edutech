
import { useRoutes } from "react-router-dom";
import IndexHome from "../pages/home/Index";

export function LmsRoutes() {
  let element = useRoutes([
    {
      path: "/",
      element: <IndexHome />,
      children: [
        {
          path: "messages",
          element: <IndexHome />,
        },
        { path: "tasks", element: <IndexHome /> },
      ],
    },
    { path: "team", element: <IndexHome /> },
  ]);

  return element;
}