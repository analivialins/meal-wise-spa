import axios from 'axios';
import { Menu } from '../interfaces/menus';

const API_URL = import.meta.env.VITE_API;

export const getMenus = async (): Promise<Menu> => {
  const token = sessionStorage.getItem('token');
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const response = await axios.get(`${API_URL}/menus`, { headers });
  return response.data;
};
