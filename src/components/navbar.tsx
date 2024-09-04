import { useState } from "react";
import Button from "./button";
import NavLink from "./nav-link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Pricing", href: "#" },
    { label: "Product", href: "#" },
    { label: "About us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Community", href: "#" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header
      className="relative flex items-center w-full justify-between pt-10 px-6 max-w-screen-xl mx-auto
    md:grid md:grid-cols-[auto,1fr,auto] md:justify-between mb-16 md:mb-28 md:grid-rows-[auto]"
    >
      {/* backdrop  */}
      <div
        data-show={menuOpen}
        onClick={toggleMenu}
        className="invisible data-[show=true]:visible block fixed left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-black/10 to-black/50
        opacity-0 data-[show=true]:opacity-100 transition-opacity duration-300 delay-100"
      >
        {/* mobile navigation */}
        <nav>
          <ul
            data-show={menuOpen}
            className="origin-top invisible scale-90 delay-100 opacity-0 data-[show=true]:opacity-100 duration-300
          data-[show=true]:visible
           data-[show=true]:scale-100 transition-all flex fixed flex-col items-center p-8 top-[15%] bg-white left-0 right-0 mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link, i) => {
              return (
                <li key={i}>
                  <NavLink link={link} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <img src="/logo.svg" alt="Logo" />
      <nav>
        <ul className="hidden md:flex justify-center items-center w-full space-x-4">
          {links.map((link, i) => {
            return (
              <li key={i}>
                <NavLink link={link} />
              </li>
            );
          })}
        </ul>
      </nav>
      <Button className="hidden md:block w-fit ml-auto">Get started</Button>

      {/* to prevent layout shifts:  */}
      {/* hamburger icon  */}
      <div className="w-10 h-10 md:hidden">
        <img
          aria-label={menuOpen ? "close menu" : "open menu"}
          role="button"
          onClick={toggleMenu}
          className="z-10 absolute right-6 top-10 hover:bg-white p-2 rounded-md transition-colors bg-cover"
          src={menuOpen ? "/icon-close.svg" : "/icon-hamburger.svg"}
          alt="Hamburger icon"
        />
      </div>
    </header>
  );
};

export default Navbar;
