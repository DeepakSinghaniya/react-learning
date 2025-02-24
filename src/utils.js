import { jwtDecode } from "jwt-decode";

export const isLogin = () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return false;
  }
  const decoded = jwtDecode(token);
  if (parseInt(decoded.exp + "000") < Date.now()) {
    return false;
  }

  return true;
};
