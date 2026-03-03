import { createElement } from "react";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import Projects from "../pages/Projects.jsx";
import ServiceDetail from "../pages/ServiceDetail.jsx";
import CaseStudies from "../pages/CaseStudies.jsx";
import CaseStudyDetail from "../pages/CaseStudyDetail.jsx";
import Contact from "../pages/Contact.jsx";
import ProjectDetail from "../pages/ProjectDetail.jsx";
import NotFound from "../pages/NotFound.jsx";

export const routes = [
    { path: "/", element: createElement(Home) },
    { path: "/about", element: createElement(About) },
    { path: "/services", element: createElement(Services) },
    { path: "/projects", element: createElement(Projects) },
    { path: "/services/:slug", element: createElement(ServiceDetail) },
    { path: "/case-studies", element: createElement(CaseStudies) },
    { path: "/case-studies/:slug", element: createElement(CaseStudyDetail) },
    { path: "/projects/:slug", element: createElement(ProjectDetail) },
    { path: "/contact", element: createElement(Contact) },
    { path: "*", element: createElement(NotFound) },
];
