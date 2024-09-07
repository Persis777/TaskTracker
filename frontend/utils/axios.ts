import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1/api',
  timeout: 5000, // Timeout if necessary
  headers: {
    ContentType: 'application/json',
  },
});

export default axiosInstance;
