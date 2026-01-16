"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

function ContactWithParams() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

  return <Contact selectedPlan={plan} />;
}

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen relative z-10">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-white">
            Loading...
          </div>
        }
      >
        <ContactWithParams />
      </Suspense>
      <Footer />
    </div>
  );
}
