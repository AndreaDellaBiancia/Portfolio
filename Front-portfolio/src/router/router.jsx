/* existing imports */
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NavBar from "../components/Navbar/Navbar";
import Projects from "../pages/Projects/Projects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import Skills from "../pages/Skills/Skills";
import Contacts from "../pages/Contacts/Contacts";
import ErrorPage from "../pages/Error/Error404";
import ScrollToTop from "../Tools/tools";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <ScrollToTop />
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
      {
        path: "/compétences",
        element: <Skills />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
