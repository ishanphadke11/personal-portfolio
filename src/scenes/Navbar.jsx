import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery("(min-width: 700px)")
    const navbarBackground = isTopOfPage ? "" : "bg-red";

    return <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}> {/* A navbar at the very top of the screen (z-index 40), spanning full width, with vertical padding of 1.5rem (py-6).*/}
        <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="font-playfair text-3xl font-bold">IP</h4>

            {/* DESKTOP NAV*/}
            {/*if this is a full size screen we want the navbar*/}
            {isAboveSmallScreen ? ( 
                <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                  {/* Flex container with evenly spaced items, large gap ( gap-16 says 4rem), and small semi-bold Open Sans text */}
                    <Link 
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Skills"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Projects"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
            ):(<button className="rounded-full bg-red p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="menu-icon" src="../assets/menu-icon-svg"></img>
            </button>)}

            {!isAboveSmallScreen && isMenuToggled && (
              <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                {/* CLOSE ICON*/}
                <div className="flex justify-end p-12">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <img alt="close-icon" src="../assets/close-icon-svg"></img>
                  </button>
                </div>

                <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                    <Link 
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Skills"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Projects"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
              </div>
            )}

        </div>
    </nav>
}

export default Navbar;