import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StickyMarqueeHeader from "../components/StickyMarqueeHeader";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import MyJourney from "../components/MyJourney";
import AboutMe from "../components/AboutMe";
import LiveLifeBy from "../components/LiveLifeBy";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StickyMarqueeHeader />
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="journey">
        <MyJourney />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <LiveLifeBy />
      <section id="contact">
        <ContactMe />
      </section>
      <Footer />
    </>
  );
}

export default Home;
