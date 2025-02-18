import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("white");

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  // Handle theme change
  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
  };

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        {user && <Link to="/profile">Profile</Link>}
      </div>
      <div>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        
        {/* Theme Switcher with Legend */}
        <fieldset>
          <legend>Choose Theme</legend>
          <select value={theme} onChange={handleThemeChange}>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="pink">Pink</option>
            <option value="red">Red</option>
          </select>
        </fieldset>
      </div>
    </nav>
  );
};

export default Navbar;
