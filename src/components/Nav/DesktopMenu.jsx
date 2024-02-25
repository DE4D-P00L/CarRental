import { NavLink, useNavigate } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import { clearUser } from "../../features/authSlice.js";
import { useDispatch, useSelector } from "react-redux";

const DesktopMenu = ({ dark, setDark }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <ul className="flex items-center gap-5">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/inventory">Inventory</NavLink>
      </li>
      {user && !user.isAgency && (
        <li>
          <NavLink to="/history">History</NavLink>
        </li>
      )}
      {user && user.isAgency && (
        <li>
          <NavLink to="/add-car">Add car</NavLink>
        </li>
      )}
      {user && user.isAgency && (
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
      )}
      {user && user.isAgency && (
        <li>
          <NavLink to="/all-cars">All Cars</NavLink>
        </li>
      )}
      <li>
        {!user && <NavLink to="/login">Login</NavLink>}
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
