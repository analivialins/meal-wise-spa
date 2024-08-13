import { useEffect } from "react";
import { useRoute } from "../../context/RouteContext";
import Layout from "../../components/layout";
import { ROUTES } from "../../routes/routes.template";
import { Coffee, FireSimple, Person, Target } from "@phosphor-icons/react";

import * as S from "./style"
import Tag from "../../components/Tag";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import { useDevice } from "../../hooks/useDevice";

export default function Home() {
    const { isMobile } = useDevice()

    const { setActiveRoute } = useRoute();
    const name = sessionStorage.getItem("name")

    useEffect(() => {
        setActiveRoute(ROUTES.HOME)
    },[])

    return(
        <Layout>
            <S.Title>Olá, {name}! </S.Title>

            <S.Infos  $isMobile={isMobile}>
                <S.TitleInfos><Target size={24} weight="fill" /> Progresso</S.TitleInfos>
                <S.ActualWeigth>
                    <S.InfosContent $isMobile={isMobile}>
                        <span>
                            Peso Atual:
                        </span>
                        <Tag
                            label="80 Kg"
                        />

                        <Button variant="secondary"><Person weight="fill"/> Atualizar peso</Button>
                    </S.InfosContent>
                    
                    <ProgressBar minWeight={100} maxWeight={60} currentWeight={80}/>
                    
                </S.ActualWeigth>
            </S.Infos>

            <S.Menus>
                <S.TitleMenus>
                    <Tag label="16 Mai • Segunda"/>
                    <h1>Seu Cardápio Hoje</h1>
                    <span><FireSimple weight="fill"/> 1250kj</span>
                </S.TitleMenus>
            </S.Menus>
        </Layout>
    )
}