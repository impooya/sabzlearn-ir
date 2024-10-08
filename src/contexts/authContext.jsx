import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userInfos: null,
  login: () => {},
  logout: () => {},
});
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});
  const login = (token) => {
    setToken(token);
    localStorage.setItem("user", JSON.stringify({ token }));
  };
  const logout = () => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, userInfos, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
