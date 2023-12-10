/* existing imports */
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NavBar from "../components/Navbar/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
