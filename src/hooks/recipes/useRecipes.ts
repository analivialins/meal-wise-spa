import { useQuery } from '@tanstack/react-query';
import { getRecipes } from '../../services/recipes';

import type { Recipe } from "../../interfaces/recipes";

export const useRecipe = () => {
  const {
    data: recipes,
    isLoading: loading,
    isError,
    refetch: fetchRecipes
  } = useQuery<Recipe[], Error>({
    queryKey: ['recipes'],
    queryFn: getRecipes,
  });

  return {
    recipes: recipes || null,
    loading,
    error: isError ? isError : null,
    fetchRecipes,
  };
};
