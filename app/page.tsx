import Hero from "./components/Hero";
import ServicesBanners from "./components/ServicesBanners";
import WhyUs from "./components/WhyUs";
import RecentWork from "./components/RecentWork";
import Reviews from "./components/Reviews";
import ContactBlock from "./components/ContactBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <ServicesBanners />
      <RecentWork />
      <Reviews />
      <ContactBlock />
    </>
  );
}
