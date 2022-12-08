import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  function logOut() {
    setLoggedIn(false);
  }

  function logIn() {
    setLoggedIn(true);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, logOut, logIn }}>
      {children}
    </AuthContext.Provider>
  );
}
