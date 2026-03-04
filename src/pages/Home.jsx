import SEO from "../app/seo/SEO.jsx";
import Hero from "../components/sections/Hero.jsx";
import StatsSection from "../components/sections/StatsSection.jsx";
import ServicesPreview from "../components/sections/ServicesPreview.jsx";
import WhyChooseUs from "../components/sections/WhyChooseUs.jsx";
import CaseStudiesPreview from "../components/sections/CaseStudiesPreview.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import CurvedLoop from "../components/home/CurvedLoop.jsx"; // ✅ add this
import ProductExplanation from "../components/sections/ProductExplanation.jsx";

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

            {/* ✅ Curved loop section */}
            <section className="relative py-10 sm:py-14 overflow-hidden">
                <div className="absolute inset-0 grid-overlay opacity-[0.06]" />
                <div className="mx-auto max-w-6xl px-4">
                    {/* If you feel it's too big, reduce text size in CurvedLoop (svg class) */}
                    <CurvedLoop
                        marqueeText="Invendoi AI Solutions • Edge AI • Real-time Video Analytics • Multi-Camera Intelligence • UAV Tracking • Geospatial Intelligence •"
                        speed={1.6}
                        curveAmount={0}
                        direction="left"
                        interactive={true}
                        className="opacity-90"
                    />
                </div>
            </section>

            <ProductExplanation />
            <StatsSection />
            <ServicesPreview />
            <WhyChooseUs />
            <CaseStudiesPreview />
            <CTASection />
        </>
    );
}