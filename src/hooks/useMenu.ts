import { useQuery } from '@tanstack/react-query';
import { getMenus } from '../services/menus';

import type { Menus } from "../interfaces/menus";

export const useMenu = () => {
  const {
    data: menus,
    isLoading: loading,
    isError,
    refetch: fetchMenus
  } = useQuery<Menus, Error>({
    queryKey: ['menus'],
    queryFn: getMenus,
  });

  return {
    menus: menus || [],
    loading,
    error: isError ? isError : null,
    fetchMenus,
  };
};
