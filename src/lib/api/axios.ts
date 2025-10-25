import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// Create axios instance with default config
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add any auth tokens or custom headers here
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log request in development
    if (process.env.NODE_ENV === "development") {
      console.log(
        `[API Request] ${config.method?.toUpperCase()} ${config.url}`
      );
    }

    return config;
  },
  (error: AxiosError) => {
    console.error("[API Request Error]", error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response in development
    if (process.env.NODE_ENV === "development") {
      console.log(
        `[API Response] ${response.config.method?.toUpperCase()} ${
          response.config.url
        }`,
        response.status
      );
    }

    return response;
  },
  (error: AxiosError) => {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;

      switch (status) {
        case 401:
          console.error("[API Error] Unauthorized");
          // Handle unauthorized (e.g., redirect to login)
          break;
        case 403:
          console.error("[API Error] Forbidden");
          break;
        case 404:
          console.error("[API Error] Not Found");
          break;
        case 500:
          console.error("[API Error] Internal Server Error");
          break;
        default:
          console.error(`[API Error] Status ${status}`);
      }
    } else if (error.request) {
      // Request made but no response received
      console.error("[API Error] No response received", error.message);
    } else {
      // Error in request setup
      console.error("[API Error] Request setup error", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
