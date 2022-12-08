import { useContext, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isLoggedIn, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}

export default App;
