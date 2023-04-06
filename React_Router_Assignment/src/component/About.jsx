import "../App.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <div>This is About Page</div>
      <button onClick={() => navigate("/")} className="btn-grad">
        Redirect
      </button>
    </>
  );
}