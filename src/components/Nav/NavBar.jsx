import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBar = ({ dark, setDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky h-[60px] w-full flex items-center justify-center border-b border-content z-[99] bg-base-100 overflow-hidden">
      <div className="flex items-center justify-between px-2 max-w-7xl w-full">
        <Logo />
        <DesktopMenu dark={dark} setDark={setDark} />
        <MobileMenu
          dark={dark}
          setDark={setDark}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <button
          className="p-2 cursor-pointer sm:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}>
          <GiHamburgerMenu className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
