import { Plus } from "@phosphor-icons/react";
import { ROUTES } from "../../routes/routes.template";

import Button from "../../components/Button";
import Layout from "../../components/layout";
import RecipeCard from "../../components/RecipeCard";

import * as S from "./style"

import { useRecipe } from "../../hooks/useRecipes";
import { useRoute } from "../../contexts/RouteContext";
import { useEffect } from "react";


export default function Recipes() {
    const { recipes, loading, error, fetchRecipes } = useRecipe();
    const { setActiveRoute } = useRoute();

    useEffect(() => {
        setActiveRoute(ROUTES.RECIPE);
        fetchRecipes();
    }, [fetchRecipes]);

    return (
        <Layout>
            <S.TitleWrapper>
                <S.Title>Livro de Receitas</S.Title>
                <Button variant="secondary"><Plus weight="bold" /> Criar Receita</Button>
            </S.TitleWrapper>

            <S.RecipesCardWrapper>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error fetching menu: {error}</p>
                ) : (
                    recipes?.map((recipe, index) => (
                        
                            <RecipeCard key={index} recipe={recipe} />
                        
                    ))
                )}
            </S.RecipesCardWrapper>
        </Layout>
    )
}