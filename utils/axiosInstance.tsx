import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const BASE_URL = "http://localhost:8081/v1";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Add token dynamically using interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    
    
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      await AsyncStorage.removeItem("token-oldPanel");
      // Optional: Navigate to login screen using navigation
      // Example: navigationRef.current?.navigate("Login");
    }

    return Promise.reject(error);
  }
);
