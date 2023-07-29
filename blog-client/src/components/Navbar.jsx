import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);
  const user = false;

  function transitionNavbar() {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  function handleNavLinkClick() {
    setOpen(false);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, [scroll]);

  return (
    <header className="w-full fixed left-0 z-[100] bg-black text-white ease duration-500">
      <nav className="max-w-[1400px] flex items-center justify-between h-20 md:px-10 px-7  my-0 mx-auto">
        <NavLink>
          <div className="cursor-pointer">
            <h1 className="">Marvin's Blog</h1>
          </div>
        </NavLink>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-4 top-6 text-primary text-3xl cursor-pointer md:hidden w-9 h-9"
        >
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <div className="flex items-center justify-between">
          <ul
            className={`bg-black md:flex md:items-center md:py-0 py-6 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 mr-5 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            <li className="md:ml-8 md:my-0 my-7 font-black text-xs">
              <NavLink
                to="/about"
                className={
                  scroll
                    ? "hover:text-primary duration-500 ease heading nav-link "
                    : " nav-link ease hover:text-primary duration-500 heading"
                }
                onClick={handleNavLinkClick}
              >
                NBA
              </NavLink>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-black text-xs">
              <NavLink
                to="/services"
                className={
                  scroll
                    ? "hover:text-primary duration-500 ease heading nav-link "
                    : " nav-link ease hover:text-primary duration-500 heading"
                }
                onClick={handleNavLinkClick}
              >
                TECHNOLOGY
              </NavLink>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-black text-xs">
              <NavLink
                to="/pricing"
                className={
                  scroll
                    ? " hover:text-primary duration-500 ease heading nav-link "
                    : " nav-link ease  hover:text-primary duration-500 heading"
                }
                onClick={handleNavLinkClick}
              >
                FOOTBALL
              </NavLink>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-black text-xs">
              <NavLink
                to="/get-quote"
                className={
                  scroll
                    ? " hover:text-primary duration-500 ease heading nav-link "
                    : " nav-link ease  hover:text-primary duration-500 heading"
                }
                onClick={handleNavLinkClick}
              >
                MUSIC
              </NavLink>
            </li>
            <li className="md:ml-8 md:my-0 my-7 font-black text-xs">
              <NavLink
                to="/contact"
                className={
                  scroll
                    ? "hover:text-primary duration-500 ease heading nav-link "
                    : " nav-link ease hover:text-primary duration-500 heading"
                }
                onClick={handleNavLinkClick}
              >
                MOVIES
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-1">
          {user && (
            <Link
              to="/profile"
              className="bg-primary text-xs md:text-base text-white md:ml-3 mr-9 px-3 py-1 rounded-2xl"
            >
              Profile
            </Link>
          )}

          <Link to="/register">
            <button className="bg-primary text-xs md:text-base border-white border-2 text-white md:ml-3 mr-9 px-3 py-1 rounded-2xl duration-500">
              Register
            </button>
          </Link>

          <Link to="/login">
            <button className="bg-primary text-xs md:text-base border-white border-2 text-white md:ml-3 mr-9 px-3 py-1 rounded-2xl duration-500">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
