import SEO from "../app/seo/SEO.jsx";
import ProjectsSection from "../components/projects/ProjectsSection.jsx";

export default function Projects() {
    return (
        <>
            <SEO
                title="Projects | Invendoi AI Solutions"
                description="Real-world AI deployments across municipal, wildlife, enterprise, and aerial domains. Explore our delivered solutions."
                path="/projects"
                image="https://images.unsplash.com/photo-1504384308090-c89e9130a8cc?auto=format&fit=crop&w=1600&q=80"
            />
            <ProjectsSection />
        </>
    );
}