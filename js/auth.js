export const API_URL = "https://kwil-management-system-backend.onrender.com/api";

export const getToken = () => localStorage.getItem("kil_token");

export const getUser = () => JSON.parse(localStorage.getItem("kil_user"));

export const logout = () => {
  localStorage.removeItem("kil_token");
  localStorage.removeItem("kil_user");
  window.location.href = "index.html";
};

export const requireAuth = (role) => {
  const token = getToken();
  const user = getUser();
  if (!token || !user) {
    window.location.href = "index.html";
    return false;
  }
  if (role && user.role !== role) {
    window.location.href = "index.html";
    return false;
  }
  return true;
};