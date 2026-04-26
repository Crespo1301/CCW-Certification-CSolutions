import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import AdvancedTraining from "@/components/AdvancedTraining";
import Instructor from "@/components/Instructor";
import RangeReel from "@/components/RangeReel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <Navbar />
      <Hero />
      <Courses />
      <AdvancedTraining />
      <Instructor />
      <RangeReel />
      <Contact />
      <Footer />
    </main>
  );
}
