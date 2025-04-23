import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import DetailsProduct from "../components/DetailsProduct/DetailsProduct";



const router = createBrowserRouter([
    {
      path: "/",
      element : <Main></Main>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : '/detailsProduct/:id',
          element : <DetailsProduct></DetailsProduct>
        }
      ]
    },
  ]);

  export default router