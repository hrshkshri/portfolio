import axios, { AxiosInstance } from 'axios';

/**
 * Server-side axios instance for making external API calls
 * This is separate from client-side axios and runs only on the server
 */
const serverAxios: AxiosInstance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging in development
serverAxios.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Server API Request] ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error) => {
    console.error('[Server API Request Error]', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
serverAxios.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Server API Response] ${response.config.method?.toUpperCase()} ${response.config.url}`, response.status);
    }
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      const url = error.config?.url || 'unknown';
      console.error(`[Server API Error] ${status} - ${url}`, error.response.data);
    } else if (error.request) {
      console.error('[Server API Error] No response received', error.message);
    } else {
      console.error('[Server API Error]', error.message);
    }
    return Promise.reject(error);
  }
);

export default serverAxios;
