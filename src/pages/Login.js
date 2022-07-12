import { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleSearchInput = (e) => {
    setUser(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <LoginForm
        searchTerm={user}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />
    </div>
  );
};

export default Login;
