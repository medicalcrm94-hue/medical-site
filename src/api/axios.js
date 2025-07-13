import axios from "axios";

const api = axios.create({
  baseURL: "https://medical-deploy-784797008827.europe-west1.run.app/",
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

export default api;
