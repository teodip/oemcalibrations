import { useLenis } from "./lib/useLenis";
import { GrainOverlay } from "./components/GrainOverlay";
import { GridBackground } from "./components/GridBackground";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { WhyItMatters } from "./components/WhyItMatters";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Specs } from "./components/Specs";
import { Vehicles } from "./components/Vehicles";
import { WhyUs } from "./components/WhyUs";
import { Coverage } from "./components/Coverage";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useLenis();
  return (
    <>
      <GridBackground />
      <GrainOverlay />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <WhyItMatters />
        <Services />
        <Process />
        <Specs />
        <Vehicles />
        <WhyUs />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
