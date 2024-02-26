import { NavLink, useNavigate } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import { clearUser } from "../../features/authSlice.js";
import { useDispatch, useSelector } from "react-redux";

const DesktopMenu = ({ dark, setDark }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <ul className="items-center gap-5 hidden sm:flex select-none">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-base-content text-base-100 px-2 py-1" : "px-2 py-1"
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            isActive ? "bg-base-content text-base-100 px-2 py-1" : "px-2 py-1"
          }>
          Inventory
        </NavLink>
      </li>
      {user && !user.isAgency && (
        <li>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive ? "bg-base-content text-base-100 px-2 py-1" : "px-2 py-1"
            }>
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
            }>
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
            }>
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
            }>
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
            }>
            Login
          </NavLink>
        )}
        {user && (
          <button
            onClick={() => {
              dispatch(clearUser());
              navigate("/login", { replace: true });
            }}>
            Logout
          </button>
        )}
      </li>
      <ThemeSwitch dark={dark} setDark={setDark} />
    </ul>
  );
};
export default DesktopMenu;
