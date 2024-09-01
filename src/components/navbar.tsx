import { useState } from "react";
import Button from "./button";

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
      <div
        data-show={menuOpen}
        onClick={toggleMenu}
        className="hidden data-[show=true]:block fixed left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-black/10 to-black/50"
      />
      <div
        data-show={menuOpen}
        className="hidden data-[show=true]:flex absolute flex-col items-center
        p-8 top-[calc(100%+32px)] bg-white left-0 right-0"
      >
        {links.map((link) => {
          return (
            <a href={link.href} className="font-bold text-slate-600 py-2.5">
              {link.label}
            </a>
          );
        })}
      </div>
      <img src="/logo.svg" alt="Logo" />
      <div className="hidden md:flex justify-center items-center w-full space-x-4">
        {links.map((link) => {
          return (
            <a
              className="shrink-0 group overflow-hidden relative font-bold text-sm text-slate-600/90"
              href={link.href}
            >
              <span className="text-transparent">{link.label}</span>
              <div className="duration-[250ms] group-hover:-translate-y-full transition-all absolute left-0 right-0 top-0 bottom-0">
                {link.label}
              </div>
              <div className="duration-[250ms] text-orange-600 translate-y-full group-hover:translate-y-0 transition-all absolute left-0 right-0 top-0 bottom-0">
                {link.label}
              </div>
            </a>
          );
        })}
      </div>
      <Button className="hidden md:block w-fit ml-auto">Get started</Button>

      {/* hamburger icon  */}
      <img
        aria-label="open menu"
        role="button"
        onClick={toggleMenu}
        className="md:hidden"
        src="/icon-hamburger.svg"
        alt="Hamburger icon"
      />
    </div>
  );
};

export default Navbar;
