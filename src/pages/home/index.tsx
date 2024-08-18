import { useEffect } from "react";
import { useRoute } from "../../contexts/RouteContext";
import Layout from "../../components/layout";
import { ROUTES } from "../../routes/routes.template";
import { FireSimple, Person, Target } from "@phosphor-icons/react";

import * as S from "./style";
import Tag from "../../components/Tag";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import { useDevice } from "../../hooks/useDevice";
import { useMenu } from "../../hooks/useMenu";
import { getFormattedDate, getMenuForToday } from "../../utils/strings";
import MenuCard from "../../components/MenuCard";

export default function Home() {
    const { isMobile } = useDevice();
    const { setActiveRoute } = useRoute();
    const name = sessionStorage.getItem("name");

    const { menu, loading, error, fetchMenus } = useMenu();

    useEffect(() => {
        setActiveRoute(ROUTES.HOME);
        fetchMenus();
    }, [setActiveRoute, fetchMenus]);

    const mealsToday = menu ? getMenuForToday(menu) : [];
    const sortedMeals = mealsToday.sort((a, b) => a.type - b.type);
    
    const totalCalories = mealsToday.reduce((acc, meal) => acc + meal.recipe.totalCalories, 0);
    return (
        <Layout>
            <S.Title>Olá, {name}!</S.Title>

            <S.Infos $isMobile={isMobile}>
                <S.TitleInfos><Target size={24} weight="fill" /> Progresso</S.TitleInfos>
                <S.ActualWeigth>
                    <S.InfosContent $isMobile={isMobile}>
                        <span>Peso Atual:</span>
                        <Tag label="80 Kg" />
                        <Button variant="secondary"><Person weight="fill" /> Atualizar peso</Button>
                    </S.InfosContent>
                    
                    <ProgressBar minWeight={100} maxWeight={60} currentWeight={80} />
                </S.ActualWeigth>
            </S.Infos>

            <S.Menus>
                <S.TitleMenus>
                    <Tag label={getFormattedDate()} />
                    <h1>Seu Cardápio Hoje</h1>
                    <span><FireSimple weight="fill" /> {totalCalories} Kcal</span>
                </S.TitleMenus>

                <S.RecipesCardWrapper>
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error fetching menu: {error}</p>
                        ) : (
                            sortedMeals.map((meal, index) => (
                                
                                    <MenuCard key={index} meal={meal} />
                                
                            ))
                        )}
                </S.RecipesCardWrapper>
            </S.Menus>
        </Layout>
    );
}
