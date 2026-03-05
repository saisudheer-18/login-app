import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome {username}</h1>
      <p>You have successfully logged in.</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Welcome;