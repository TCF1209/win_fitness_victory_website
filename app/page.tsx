import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Trainers from "@/components/Trainers";
import Testimonials from "@/components/Testimonials";
import JoinForm from "@/components/JoinForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Pricing />
      <Trainers />
      <Testimonials />
      <JoinForm />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
