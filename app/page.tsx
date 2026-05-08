import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import RecentProjects from "./components/RecentProjects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Reviews />
      <RecentProjects />
      <Contact />
    </>
  );
}
