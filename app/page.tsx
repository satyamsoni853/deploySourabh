import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects"; // Featured Projects
import DeliveredProjects from "@/components/sections/DeliveredProjects"; // Success Stories
import HappyCustomers from "@/components/sections/HappyCustomers";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Pricing from "@/components/sections/Pricing";
import HowWeWork from "@/components/sections/HowWeWork";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Awards from "@/components/sections/Awards";
import Footer from "@/components/Footer";

// Wrapper for scroll snap sections
const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full min-h-screen snap-start flex flex-col justify-center items-center relative py-12 md:py-0 border-b border-white/5 last:border-0">
    {children}
  </div>
);

export default function Home() {
  return (
    <div
      id="main-scroll-container"
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
    >
      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <SectionWrapper>
        <Awards />
      </SectionWrapper>

      <SectionWrapper>
        <WhyChooseUs />
      </SectionWrapper>

      <SectionWrapper>
        <Services />
      </SectionWrapper>

      <SectionWrapper>
        <HowWeWork />
      </SectionWrapper>

      <SectionWrapper>
        <DeliveredProjects />
      </SectionWrapper>

      <SectionWrapper>
        <Pricing />
      </SectionWrapper>

      <SectionWrapper>
        <HappyCustomers />
      </SectionWrapper>

      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper>
        <FAQ />
      </SectionWrapper>

      <SectionWrapper>
        <Contact />
      </SectionWrapper>

      <div className="snap-start">
        <Footer />
      </div>
    </div>
  );
}
