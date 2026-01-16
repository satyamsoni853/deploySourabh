import HappyCustomers from "@/components/sections/HappyCustomers";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/Footer";

export default function TestimonialsPage() {
  return (
    <div className="pt-20 min-h-screen flex flex-col gap-10 pb-10">
      <HappyCustomers />
      <Testimonials />
      <Footer />
    </div>
  );
}
