import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function LoginPage() {
  const { isLoggedIn, logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h2>Login</h2>
      <button onClick={logIn}>Login</button>
    </div>
  );
}

export default LoginPage;
