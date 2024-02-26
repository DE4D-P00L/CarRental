import { NavLink, useNavigate } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import { clearUser } from "../../features/authSlice.js";
import { useDispatch, useSelector } from "react-redux";

const MobileMenu = ({ dark, setDark, menuOpen, setMenuOpen }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ul
      className={`items-center gap-5 flex sm:hidden flex-col fixed top-[60px] bg-base-100 shadow-md w-full py-10 select-none ${
        menuOpen ? "right-0" : "-right-[100%]"
      } transition-all duration-300 ease-in-out`}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-base-content text-base-100 px-2 py-1" : "px-2 py-1"
          }
          onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            isActive ? "bg-base-content text-base-100 px-2 py-1" : "px-2 py-1"
          }
          onClick={() => setMenuOpen(false)}>
          Inventory
        </NavLink>
      </li>
      {user && !user.isAgency && (
        <li>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive ? "bg-base-content text-base-100 px-2 py-1" : "px-2 py-1"
            }
            onClick={() => setMenuOpen(false)}>
            History
          </NavLink>
        </li>
      )}
      {user && user.isAgency && (
        <li>
          <NavLink
            to="/add-car"
            className={({ isActive }) =>
              isActive ? "bg-base-content text-base-100 px-2 py-1" : "px-2 py-1"
            }
            onClick={() => setMenuOpen(false)}>
            Add car
          </NavLink>
        </li>
      )}
      {user && user.isAgency && (
        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "bg-base-content text-base-100 px-2 py-1" : "px-2 py-1"
            }
            onClick={() => setMenuOpen(false)}>
            Orders
          </NavLink>
        </li>
      )}
      {user && user.isAgency && (
        <li>
          <NavLink
            to="/all-cars"
            className={({ isActive }) =>
              isActive ? "bg-base-content text-base-100 px-2 py-1" : "px-2 py-1"
            }
            onClick={() => setMenuOpen(false)}>
            All Cars
          </NavLink>
        </li>
      )}
      <li>
        {!user && (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "bg-base-content text-base-100 px-2 py-1" : "px-2 py-1"
            }
            onClick={() => setMenuOpen(false)}>
            Login
          </NavLink>
        )}
        {user && (
          <button
            onClick={() => {
              dispatch(clearUser());
              navigate("/login", { replace: true });
              setMenuOpen(false);
            }}>
            Logout
          </button>
        )}
      </li>
      <ThemeSwitch dark={dark} setDark={setDark} />
    </ul>
  );
};
export default MobileMenu;
