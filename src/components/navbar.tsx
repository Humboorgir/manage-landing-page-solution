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
    <div
      className="relative flex items-center w-full justify-between mb-16 md:mb-28
    md:grid md:grid-cols-[auto,1fr,auto] md:justify-between"
    >
      {/* backdrop  */}
      <div
        data-show={menuOpen}
        onClick={toggleMenu}
        className="invisible data-[show=true]:visible block fixed left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-black/10 to-black/50
        opacity-0 data-[show=true]:opacity-100 transition-opacity duration-300"
      />
      {/* mobile navigation */}
      <div
        data-show={menuOpen}
        className="delay-100 invisible opacity-0 -translate-y-4 data-[show=true]:opacity-100 data-[show=true]:translate-y-0
        transition-[opacity,transform] duration-300 data-[show=true]:visible flex absolute flex-col items-center
        p-8 top-[calc(100%+32px)] bg-white left-0 right-0"
      >
        {links.map((link, i) => {
          return <NavLink data-show={menuOpen} key={i} link={link} />;
        })}
      </div>

      <img src="/logo.svg" alt="Logo" />
      <div className="hidden md:flex justify-center items-center w-full space-x-4">
        {links.map((link) => {
          return <NavLink link={link} />;
        })}
      </div>
      <Button className="hidden md:block w-fit ml-auto">Get started</Button>

      {/* hamburger icon  */}
      <img
        aria-label={menuOpen ? "close menu" : "open menu"}
        role="button"
        onClick={toggleMenu}
        className="md:hidden z-10 hover:bg-white p-2 rounded-md transition-colors"
        src={menuOpen ? "/icon-close.svg" : "/icon-hamburger.svg"}
        alt="Hamburger icon"
      />
    </div>
  );
};

export default Navbar;
