import { useEffect } from "react";
import { createPortal } from "react-dom";
import * as S from "./style"
import { useRecipeById } from "../../hooks/recipes/useRecipeById";
import useRecipeImage from "../../hooks/recipes/useRecipeImage";
import { getUnitById } from "../../utils/strings";
import { FireSimple } from "@phosphor-icons/react";

type RecipeModalProp = {
    recipeId?: string;
    closeModal: () => void;
};

export default function RecipeModal({recipeId, closeModal}: RecipeModalProp){
    const { recipe } = useRecipeById(recipeId || '');
    const imageSrc = useRecipeImage(recipe?.cover);

    const handleKeyup = (event: KeyboardEvent) => {
        if (event.key === "Escape") closeModal();
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) closeModal();
    };

    useEffect(() => {
        window.addEventListener("keyup", handleKeyup);
        return () => {
            window.removeEventListener("keyup", handleKeyup);
        };
    }, []);

    console.log(recipe);
    

    return createPortal(
        <S.Wrapper onClick={handleClick}>
            <S.Overlay>
                {recipe && (
                    <>
                    <S.Cover backgroundImage={imageSrc} />
                    <S.TitleWrapper>
                        <S.Title>{recipe.name}</S.Title>
                        <S.Calories><FireSimple weight="fill" /> {recipe.totalCalories} Kcal</S.Calories>
                    </S.TitleWrapper>
                    <S.Content>
                        <S.Ingredients>
                            <span>Ingredientes</span>
                            <ul>
                                { recipe.ingredients.map((ingredient) => {
                                    const unit = getUnitById(ingredient.unity);
                                        return(
                                            <li>{ingredient.quantity} {unit?.abbreviation} {ingredient.description}</li>
                                        )
                                    })
                                }
                            </ul>
                        </S.Ingredients>
                        <S.Prepares>
                            <span>Modo de Preparo</span>
                            <ul>
                                { recipe.prepares.map((prepare) => {
                                        return(
                                            <li>{prepare}</li>
                                        )
                                    })
                                }
                            </ul>
                        </S.Prepares>
                    </S.Content>
                    </>
                )}
            </S.Overlay>
        </S.Wrapper>,
        document.body
    );
}