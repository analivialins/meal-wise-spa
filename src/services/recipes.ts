import axios from 'axios';
import { Recipe } from '../interfaces/recipes';

const API_URL = import.meta.env.VITE_API;

export const getRecipes = async (): Promise<Recipe[]> => {
  const token = sessionStorage.getItem('token');
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  
  const response = await axios.get(`${API_URL}/recipes`, { headers });
  return response.data;
};