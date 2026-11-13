import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { WhyKhata } from "@/components/why-khata";
import { CtaBand, Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <WhyKhata />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
