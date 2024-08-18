import axios from 'axios';
import { Informations } from '../interfaces/users';
const API_URL = import.meta.env.VITE_API;

export const updateUserInformations = async (informations: Informations): Promise<void> => {
  const token = sessionStorage.getItem('token');
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  await axios.put(`${API_URL}/users/informations`, informations, { headers });
};
