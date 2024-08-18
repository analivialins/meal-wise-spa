    import { BookOpenText, Coffee, CookingPot, FireSimple, ForkKnife } from "@phosphor-icons/react";
    import useRecipeImage from "../../hooks/recipes/useRecipeImage";
    import { Meal } from "../../interfaces/menus";
    import * as S from "./style"
    import Tag from "../Tag";
    import { MealType } from "../../interfaces/recipes";
    import Button from "../Button";


    type MenuCardProp = {
        meal: Meal;
    };


    export default function MenuCard({ meal }: MenuCardProp) {
        const { recipe } = meal;
        const imageSrc = useRecipeImage(recipe.cover);

        const getTagDetails = (type: MealType) => {
            switch (type) {
                case 0:
                    return { icon: <Coffee weight="fill" />, label: "Café da Manhã" };
                case 1:
                    return { icon: <ForkKnife weight="fill" />, label: "Almoço" };
                case 2:
                    return { icon: <CookingPot weight="fill" />, label: "Jantar" };
                default:
                    return { icon: <Coffee weight="fill" />, label: "Desconhecido" };
            }
        };
        
        const { icon, label } = getTagDetails(meal.type);

        return (
            <S.Wrapper>
                <Tag icon={icon} label={label}/>
                <S.Image backgroundImage={imageSrc} />
                <h2>{recipe.name}</h2>
                <p><FireSimple weight="fill" />{recipe.totalCalories} Kcal</p>
                <Button><BookOpenText  weight="fill"/> Ver Receita</Button>
            </S.Wrapper>
        );
    }
