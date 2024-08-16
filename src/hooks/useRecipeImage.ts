import { useState, useEffect } from 'react';

const useRecipeImage = (coverId: number) => {
  const [imageSrc, setImageSrc] = useState<string>('/src/assets/recipescovers/placeholder.jpg');

  useEffect(() => {
    const imageUrl = `/src/assets/recipescovers/${coverId}.jpg`;

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageSrc(imageUrl);
    img.onerror = () => setImageSrc('/src/assets/recipescovers/placeholder.jpg');
  }, [coverId]);

  return imageSrc;
};

export default useRecipeImage;
