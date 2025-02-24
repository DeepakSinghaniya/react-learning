import { Navigate } from "react-router-dom";
import { isLogin } from "../utils";

const ProtectedRoute = (props) => {
  if (!isLogin()) {
    return <Navigate to="/login" />;
  }

  return props.children;
};

export default ProtectedRoute;
