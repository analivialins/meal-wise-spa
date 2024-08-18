import useRecipeImage from "../../hooks/recipes/useRecipeImage";
import * as S from "./style";

import Button from "../Button";
import { Recipe } from "../../interfaces/recipes";
import { FireSimple, BookOpenText } from "@phosphor-icons/react";

type RecipeCardProp = {
    recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProp) {
    const imageSrc = useRecipeImage(recipe.cover);

    return (
        <S.Wrapper>
            <S.Image backgroundImage={imageSrc}/>
            <h2>{recipe.name}</h2>
            <p><FireSimple weight="fill" /> {recipe.totalCalories} Kcal</p>
            <Button>
                <BookOpenText weight="fill" /> Ver Receita
            </Button>
        </S.Wrapper>
    );
}
