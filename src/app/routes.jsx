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
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/services/:slug", element: <ServiceDetail /> },
    { path: "/projects", element: <Projects /> },
    { path: "/projects/:slug", element: <ProjectDetail /> },
    { path: "/case-studies", element: <CaseStudies /> },
    { path: "/case-studies/:slug", element: <CaseStudyDetail /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <NotFound /> },
];