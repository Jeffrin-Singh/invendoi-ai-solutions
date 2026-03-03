import SEO from "../app/seo/SEO.jsx";
import Hero from "../components/sections/Hero.jsx";
import StatsSection from "../components/sections/StatsSection.jsx";
import ServicesPreview from "../components/sections/ServicesPreview.jsx";
import WhyChooseUs from "../components/sections/WhyChooseUs.jsx";
import CaseStudiesPreview from "../components/sections/CaseStudiesPreview.jsx";
import CTASection from "../components/sections/CTASection.jsx";

export default function Home() {
    return (
        <>
            <SEO
                title="Invendoi AI Solutions Pvt. Ltd. | Edge AI & Real-time Video Analytics"
                description="Computer vision, edge AI, real-time video analytics and geospatial intelligence for government and enterprise operations—built for scale, low bandwidth, and audit-ready workflows."
                path="/"
                image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
            />
            <Hero />
            <StatsSection />
            <ServicesPreview />
            <WhyChooseUs />
            <CaseStudiesPreview />
            <CTASection />
        </>
    );
}