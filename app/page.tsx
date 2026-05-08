import Hero from "./components/Hero";
import QuoteForm from "./components/QuoteForm";
import Services from "./components/Services";
import HelloAustin from "./components/HelloAustin";
import Promise from "./components/Promise";
import FounderNote from "./components/FounderNote";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteForm />
      <Services />
      <HelloAustin />
      <Promise />
      <FounderNote />
      <Gallery />
      <Testimonials />
      <CTABanner />
    </>
  );
}
