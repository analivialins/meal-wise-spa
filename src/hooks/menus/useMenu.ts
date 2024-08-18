import { useQuery } from '@tanstack/react-query';
import { getMenus } from '../../services/menus';

import type { Menu } from "../../interfaces/menus";

export const useMenu = () => {
  const {
    data: menu,
    isLoading: loading,
    isError,
    refetch: fetchMenus
  } = useQuery<Menu, Error>({
    queryKey: ['menu'],
    queryFn: getMenus,
  });

  return {
    menu: menu || null,
    loading,
    error: isError ? isError : null,
    fetchMenus,
  };
};
