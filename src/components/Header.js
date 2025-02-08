import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>Header</h1>
      <Link to="/">Shop</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </header>
  );
};
