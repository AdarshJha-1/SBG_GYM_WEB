import { Link, NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  const navLinks = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "About",
      to: "/about",
    },
    {
      text: "Plans",
      to: "/plans",
    },
    {
      text: "Dashboard",
      to: "/dashboard",
    },
    {
      text: "Login",
      to: "/login",
    },
  ];

  return (
    <header className="w-full bg-black">
      <nav className="w-3/4 h-[65px] flex items-center justify-between mx-auto">
        <Link to={"/"}>
          <h1 className="text-4xl text-white font-bold tracking-tight">SBG</h1>
        </Link>
        <ul className="lg:flex item-center gap-11 text-[16px] font-semibold hidden lg:visible">
          {navLinks.map(({to, text}, index) => (
            <li key={index}>
              <NavLink className={({isActive}) => isActive? 'text-amber-500' : 'text-white'} to={to}>{text}</NavLink>
            </li>
          ))}
        </ul>
        <div className="visible lg:hidden w-2/3 flex justify-end items-center">
        <MobileNav navLinks={navLinks}/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
