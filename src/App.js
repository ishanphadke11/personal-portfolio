import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import LineGradient from "./components/LineGradient";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer.jsx";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  // Scroll listener to detect current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.getBoundingClientRect().top;
          const height = element.offsetHeight;
          if (top <= window.innerHeight / 2 && top + height >= window.innerHeight / 2) {
            setSelectedPage(section);
          }
        }
      });

      setIsTopOfPage(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}

        <section id="home">
          <Landing setSelectedPage={setSelectedPage} />
        </section>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto">
        <section id="skills">
          <MySkills />
        </section>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto">
        <section id="projects">
          <Projects />
        </section>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto">
        <section id="contact">
          <Contact />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
