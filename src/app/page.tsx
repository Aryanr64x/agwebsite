import Image from "next/image";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Welcome from "../../components/Welcome";
import BookJourney from "../../components/BookJourney";
import HelpSection from "../../components/HelpSection";
import TherapyProcess from "../../components/TherapyProcess";
import Benefits from "../../components/Benefits";
import Services from "../../components/Services";
import TherapeuticInterventions from "../../components/TherapeuticInterventions";
import BookYourSession from "../../components/BookYourSession";
import ChoosePlan from "../../components/ChooseYourPlan";
import BookYourSlot from "../../components/BookYourSlot";
import About from "../../components/About";
import MissionVision from "../../components/MissionVision";
import WorkEthics from "../../components/WorkEthics";
import WordsThatInspire from "../../components/WordsThatInspire";
import GetInTouch from "../../components/GetInTouch";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";
import CalmGradientBackground from "../../components/CalmGradientBackground";
// https://www.figma.com/make/fxf46qH3KOadluCPp5pcbb/Counselling-Practice-Template?node-id=0-4&t=oGp3XjL0lJDVZAoS-1
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* 🌸 Calm animated background */}
      <CalmGradientBackground />

      {/* Page content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Welcome />
        <BookJourney />
        <HelpSection />
        <TherapyProcess />
        <Benefits />
        <Services />
        <TherapeuticInterventions />
        <BookYourSession />
        <ChoosePlan />
        <BookYourSlot />
        <About />
        <MissionVision />
        <WorkEthics />
        <FAQ />
        <WordsThatInspire />
        <GetInTouch />    
        <hr />
        <Footer />
      </div>

    </div>
  );
}
