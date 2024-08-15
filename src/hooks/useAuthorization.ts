import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { ROUTES } from '../routes/routes.template';
import { login } from '../services/authorization';

interface LoginCredentials {
  email: string;
  password: string;
}

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => login(credentials.email, credentials.password),
    onSuccess: (data: {name: string, access_token: string}) => {
        navigate(ROUTES.HOME);
        sessionStorage.setItem("name", data.name)
        sessionStorage.setItem("token", data.access_token)

    },
    onError: (error: Error) => {
      console.error('Login failed', error);
    }
  });
};

export default useLogin;

