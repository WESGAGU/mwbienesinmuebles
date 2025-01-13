import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export const register = async (userData: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/local/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials: { identifier: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/local`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};