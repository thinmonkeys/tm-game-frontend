import "./NavBar.css";

const NavBarItem = ({ name, path, isActive }) => {
  if (isActive) {
    return (
      <b>
        <u>{name}</u>
      </b>
    );
  } else return <a href={path}>{name}</a>;
};

export default NavBarItem;
