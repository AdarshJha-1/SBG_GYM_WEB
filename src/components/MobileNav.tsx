import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";

interface navLinksVal {
  text: string;
  to: string;
}

const MobileNav = ({ navLinks }: { navLinks: navLinksVal[] }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
      {isOpen && <ul className={`w-2/3 h-[50vh] z-10 absolute top-[65px] flex flex-col gap-4 items-center right-0 px-6 py-10 text-[16px] font-semibold bg-black opacity-90  `}>
        <h1 className="text-center text-2xl font-sans font-bold">Welcome to SBG</h1>
        {navLinks.map(({ to, text }, index) => (
          <li className="w-1/2 text-xl text-center" key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-amber-500" : "text-white"
              }
              to={to}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>}
    </>
  );
};

export default MobileNav;
