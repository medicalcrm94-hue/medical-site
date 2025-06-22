import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8005/",
});

api.interceptors.request.use(
  (config) => {
    const adminToken = localStorage.getItem("token");
    if (adminToken) {
      config.headers.Authorization = `Bearer ${adminToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // Token invalid or replaced, force logout
//       localStorage.removeItem("authToken");
//       window.location.href = "/login"; // redirect to login page
//       alert("Another Device Logging in. You have been logged out.");
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
