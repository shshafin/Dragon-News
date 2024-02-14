import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import NewsDetail from "../Components/MiddleNav/News/NewsDetail/NewsDetail";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`/news.json`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetail></NewsDetail>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
