
import { useRoutes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";

const IndexRoutes = () => {
  const isLoggedIn = localStorage.getItem('token');
  
  let schemaModule = AdminRoutes(isLoggedIn)

 let route = useRoutes(schemaModule)

  return (
    <>
      {route}
    </>
  )
}

export default IndexRoutes
