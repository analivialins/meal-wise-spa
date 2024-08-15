import { useRoute } from "../../contexts/RouteContext";
import { ROUTES } from "../../routes/routes.template";
import * as S from "./style";
import { BookOpenText, House, User } from "@phosphor-icons/react";

export default function BottomBar() {
    const { activeRoute, setActiveRoute } = useRoute();

    return (
        <S.Wrapper>
             <S.NavigationItem
                isActive={activeRoute === ROUTES.RECIPE}
                onClick={() => setActiveRoute(ROUTES.RECIPE)}
            >
                <BookOpenText size={32} weight="duotone" />
            </S.NavigationItem>

            <S.NavigationItem
                isActive={activeRoute === ROUTES.HOME}
                onClick={() => setActiveRoute(ROUTES.HOME)}
            >
                <House size={32} weight="duotone" />
            </S.NavigationItem>

            <S.NavigationItem
                isActive={activeRoute === ROUTES.PERFIL}
                onClick={() => setActiveRoute(ROUTES.PERFIL)}
            >
                <User size={32} weight="duotone" />
            </S.NavigationItem>
        </S.Wrapper>
    );
}
