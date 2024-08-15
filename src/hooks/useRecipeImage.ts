import { useMemo } from 'react';

type MealType = 'breakfast' | 'lunch' | 'dinner';

const useRecipeImage = (mealType: MealType, coverId: number) => {
  const imageSrc = useMemo(() => {
    const folderPath = `/src/assets/${mealType}`;
    return `${folderPath}/${coverId - 1}.jpg`;
  }, [mealType, coverId]);

  return imageSrc;
};

export default useRecipeImage;
