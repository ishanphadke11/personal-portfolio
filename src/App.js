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
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  {/*useEffect hook to handle scrolling */}
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);  {/*check posiion of y. if it is 0 we are at the top. otherwise we are not at the top */}
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll); {/*add the handeScroll function as the "scroll" event listener */}
    return () => window.removeEventListener("scroll", handleScroll); {/**remove the event listener when the component unmounts */}
  }, [])

  return <div className="app bg-deep-blue">
    <Navbar 
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      isTopOfPage={isTopOfPage}
    />
    <div className="w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens && (
        <DotGroup 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      <Landing setSelectedPage={setSelectedPage} />
    </div>
    <LineGradient />
    <div className="w-5/6 mx-auto">
      <MySkills />
    </div>

    <LineGradient />
    <div className="w-5/6 mx-auto">
      <Projects />
    </div>

    <LineGradient />
    <div className="w-5/6 mx-auto">
      <Contact />
    </div>

    <Footer />
  </div>
}

export default App;
