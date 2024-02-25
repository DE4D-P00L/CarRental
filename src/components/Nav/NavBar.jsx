import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";

const NavBar = ({ dark, setDark }) => {
  return (
    <nav className="sticky h-[60px] w-full flex items-center justify-center border-b border-content z-[99] bg-base-100">
      <div className="flex items-center justify-between px-2 max-w-7xl w-full">
        <Logo />
        <DesktopMenu dark={dark} setDark={setDark} />
      </div>
    </nav>
  );
};
export default NavBar;
