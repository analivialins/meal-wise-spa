import { useEffect, useState } from "react";
import { useRoute } from "../../contexts/RouteContext";
import Layout from "../../components/layout";
import { ROUTES } from "../../routes/routes.template";
import { FireSimple, Person, Target } from "@phosphor-icons/react";

import * as S from "./style";
import Tag from "../../components/Tag";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import { useDevice } from "../../hooks/utils/useDevice";
import { getFormattedDate, getMenuForToday } from "../../utils/strings";
import MenuCard from "../../components/MenuCard";
import Modal from "../../components/Modal";
import TextInput from "../../components/Inputs/TextInput";
import { useMenu } from "../../hooks/menus/useMenu";
import useUpdateUserInformations from "../../hooks/users/useUpdateUserInformations";
import { Informations } from "../../interfaces/users";

export default function Home() {
    const name = sessionStorage.getItem("name");
    const userInformations: Informations = JSON.parse(sessionStorage.getItem("informations") || '{}');
    
    const { isMobile } = useDevice();
    const { setActiveRoute } = useRoute();
    const { menu, loading, error, fetchMenus } = useMenu();
    const { mutate } = useUpdateUserInformations();

    const [weightModal, setWeightModal] = useState<boolean>(false);
    const [currentWeight, setCurrentWeight] = useState<string>(userInformations.currentWeight || '');

    const mealsToday = menu ? getMenuForToday(menu) : [];
    const sortedMeals = mealsToday.sort((a, b) => a.type - b.type);
    const totalCalories = mealsToday.reduce((acc, meal) => acc + meal.recipe.totalCalories, 0);

    const handleUpdateWeight = () => {
        const updatedInformations: Informations = {
            ...userInformations,
            currentWeight: currentWeight,
        };

        mutate(updatedInformations);
        setWeightModal(false);
    };

    useEffect(() => {
        setActiveRoute(ROUTES.HOME);
        fetchMenus();
    }, [setActiveRoute, fetchMenus]);

    return (
        <Layout>
            <S.Title>Olá, {name}!</S.Title>

            <S.Infos $isMobile={isMobile}>
                <S.TitleInfos><Target size={24} weight="fill" /> Progresso</S.TitleInfos>
                <S.ActualWeigth>
                    <S.InfosContent $isMobile={isMobile}>
                        <span>Peso Atual:</span>
                        <Tag label={`${currentWeight} Kg`} />
                        <Button variant="secondary" onClick={() => setWeightModal(true)}><Person weight="fill" /> Atualizar peso</Button>
                    </S.InfosContent>
                    
                    <ProgressBar 
                        minWeight={parseInt(userInformations.weight, 10)} 
                        maxWeight={parseInt(userInformations.goalWeight, 10)} 
                        currentWeight={parseInt(currentWeight, 10) || 0} 
                    />
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

            {weightModal && (
                <Modal closeModal={() => setWeightModal(false)} title="Peso Atual">
                    <S.ModalWrapper>
                        <TextInput  
                            label="Peso atual" 
                            value={currentWeight} 
                            onChange={(e) => setCurrentWeight(e.target.value)} 
                        />
                        <Button onClick={handleUpdateWeight}>Atualizar Peso</Button>
                    </S.ModalWrapper>
                </Modal>
            )}
        </Layout>
    );
}
