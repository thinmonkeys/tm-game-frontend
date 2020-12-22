import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBarItem = ({ name, path, isActive }) => {
  if (isActive) {
    return (
      <b>
        <u>{name}</u>
      </b>
    );
  } else return <NavLink to={path}>{name}</NavLink>;
};

export default NavBarItem;
