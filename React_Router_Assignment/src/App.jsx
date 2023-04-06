import "./App.css";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./component/home";
import About from "./component/About";
import Contact from "./component/Contact";
import Profile from "./component/Profile";
import Admin from "./component/Admin";
import Error from "./component/Error";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogIn = () => {
    setLoggedIn(true);
  }

  return (
    <>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={loggedIn} />}>
            <Route
              path="/"
              element={
                <>
                  <div style={{ fontWeight: "bolder", fontSize: "1.5em" }}>
                    Hello World
                  </div>
                  <button onClick={handleLogIn} className="btn-grad">Login</button>
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin logIn={setLoggedIn}/>} />
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error />}/>
        </Routes>
    </>
  );
}

export default App;