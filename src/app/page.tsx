import About from "./about/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ContactSection from "./contact/Contact";
import Courses from "./courses/Courses";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Courses/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
