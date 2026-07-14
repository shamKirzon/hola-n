import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import HeroSection from "@/components/sections/HeroSection";
import CustomerFavorites from "@/components/sections/CustomerFavorites";
import AboutSection from "@/components/sections/AboutSection";
import CollectionSection from "@/components/sections/CollectionSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Reveal from "@/components/ui/Reveal";

const HolaLandingPage = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f5eae7_0%,#f1e1de_55%,#f3e7e4_100%)] bg-fixed text-left font-sans text-holan-ink selection:bg-holan-rose-soft selection:text-holan-ink">
      <Navbar />
      <span id="top" />
      <main className="mx-auto max-w-300 px-[clamp(20px,6vw,88px)]">
        <Reveal>
          <HeroSection />
        </Reveal>
        <Reveal>
          <CustomerFavorites />
        </Reveal>
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <CollectionSection />
        </Reveal>
        <Reveal>
          <TestimonialsSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default HolaLandingPage;
