import { useMediaQuery } from "react-responsive";

export const useDevice = () => {
  const isMobile = !useMediaQuery({ minWidth: "768px" });

  return {
    isMobile,
  };
};
