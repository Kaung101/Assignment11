import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Admin(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.logIn(false);
    navigate("/");
  };

  return (
    <>
      <img className="admin-image" src="./assets/p1.jpg" />
      <div>This is Admin Page</div>
      <button onClick={handleLogout} className="btn-grad">
        Logout
      </button>
    </>
  );
}