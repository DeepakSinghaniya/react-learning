import { Link, useNavigate } from "react-router-dom";
import { isLogin } from "../utils";

export const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <header>
      <h1>Header</h1>
      <Link to="/">Shop</Link>
      {isLogin() ? null : <Link to="/signup">Signup</Link>}
      {isLogin() ? null : <Link to="/login">Login</Link>}
      {isLogin() ? <Link to="/profile">Profile</Link> : null}
      {isLogin() ? <button onClick={logout}>Logout</button> : null}
    </header>
  );
};
