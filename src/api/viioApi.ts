import axios from "axios";
import { useAuthStore } from "../stores";

const viioApi = axios.create({
  baseURL: "http://localhost:3000/api/viio",
});

const viioSecuredApi = axios.create({
  baseURL: "http://localhost:3000/api/viio/auth",
});

// Interceptors
viioSecuredApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  console.log("🚀 ~ viioSecuredApi.interceptors.request.use ~ token:", token);
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

export { viioApi, viioSecuredApi };
