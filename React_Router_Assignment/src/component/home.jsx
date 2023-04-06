import { Outlet, NavLink, useNavigate } from "react-router-dom";

export default function Home(props) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    if (props.isLoggedIn) {
      navigate("admin");
    } else {
      console.log("not logged in");
    }
  };

  return (
    <div className="container">
      <Outlet />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/admin" onClick={handleClick}>
          For Admin!
        </NavLink>
      </nav>
    </div>
  );
}