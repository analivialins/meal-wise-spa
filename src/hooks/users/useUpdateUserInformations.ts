import { useMutation } from '@tanstack/react-query';
import { Informations } from '../../interfaces/users';
import { updateUserInformations } from '../../services/users';

const useUpdateUserInformations = () => {
  return useMutation<void, Error, Informations>({
    mutationFn: (updatedInformations) => updateUserInformations(updatedInformations),
    onSuccess: (variables) => {
      sessionStorage.setItem("informations", JSON.stringify(variables));
    },
    onError: (error) => {
      console.error('Failed to update user informations', error);
    },
  });
};

export default useUpdateUserInformations;
