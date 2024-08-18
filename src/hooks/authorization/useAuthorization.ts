import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../routes/routes.template';
import { login } from '../../services/authorization';
import { Informations } from '../../interfaces/users';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  name: string;
  access_token: string;
  informations: Informations;
}

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => login(credentials.email, credentials.password),
    onSuccess: (data: LoginResponse) => {
      navigate(ROUTES.HOME);
      sessionStorage.setItem('name', data.name);
      sessionStorage.setItem('token', data.access_token);
      sessionStorage.setItem('informations', JSON.stringify(data.informations));
    },
    onError: (error: Error) => {
      console.error('Login failed', error);
    },
  });
};

export default useLogin;
