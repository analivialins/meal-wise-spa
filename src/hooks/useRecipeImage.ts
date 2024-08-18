import { useState, useEffect } from 'react';
import Placeholder from '../assets/recipesCovers/placeholdersvg.svg';

const useRecipeImage = (coverId: number) => {
  const [imageSrc, setImageSrc] = useState<string>(Placeholder);

  useEffect(() => {
    const imageUrl = `/src/assets/recipescovers/${coverId}.jpg`;

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => setImageSrc(imageUrl);
    img.onerror = () => setImageSrc(Placeholder);
  }, [coverId]);

  return imageSrc;
};

export default useRecipeImage;
