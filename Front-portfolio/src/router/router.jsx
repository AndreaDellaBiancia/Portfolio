/* existing imports */
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NavBar from "../components/Navbar/Navbar";
import Projects from "../pages/Projects/Projects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

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
      {
        path: "/projets",
        element: <Projects />,
      },
      {
        path: "/projets/:projectTitle",
        element: <ProjectDetails />,
      },
    ],
  },
]);
