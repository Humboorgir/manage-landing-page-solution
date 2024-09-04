import { twMerge } from "tailwind-merge";

// comes with a simple and interesting hover effect
type NavLinkProps = {
  link: {
    href: string;
    label: string;
  };
  className?: string;
};

const NavLink = ({ link, className }: NavLinkProps) => {
  return (
    <a
      className={twMerge(
        "block py-2.5 md:py-0.5 shrink-0 group overflow-hidden relative font-bold text-sm text-slate-600/90",
        className
      )}
      href={link.href}
    >
      {/* invisible label to make its container the correct width */}
      <span className="invisible">{link.label}</span>
      <div className="duration-[250ms] group-hover:-translate-y-full transition-all absolute left-0 right-0 top-0 bottom-0">
        {link.label}
      </div>
      <div className="duration-[250ms] text-primary translate-y-full group-hover:translate-y-0 transition-all absolute left-0 right-0 top-0 bottom-0">
        {link.label}
      </div>
    </a>
  );
};

export default NavLink;
