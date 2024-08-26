import { useQuery } from '@tanstack/react-query';
import { getRecipesById } from '../../services/recipes';
import type { Recipe } from "../../interfaces/recipes";

export const useRecipeById = (id: string) => {
  const {
    data: recipe,
    isLoading: loading,
    isError,
    refetch: fetchRecipe,
  } = useQuery<Recipe, Error>({
    queryKey: ['recipe', id],
    queryFn: () => getRecipesById(id),
  });

  return {
    recipe: recipe,
    loading,
    error: isError ? isError : null,
    fetchRecipe,
  };
};
