import { useRoute } from "../../contexts/RouteContext";
import { ROUTES } from "../../routes/routes.template";
import * as S from "./style";
import { BookOpenText, House, User } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export default function BottomBar() {
    const { activeRoute, setActiveRoute } = useRoute();
    const navigate = useNavigate();

    const handleRouteChange = (route: string) => {
        setActiveRoute(route);
        navigate(route);
    };

    return (
        <S.Wrapper>
            <S.NavigationItem
                isActive={activeRoute === ROUTES.RECIPE}
                onClick={() => handleRouteChange(ROUTES.RECIPE)}
            >
                <BookOpenText size={32} weight="duotone" />
            </S.NavigationItem>

            <S.NavigationItem
                isActive={activeRoute === ROUTES.HOME}
                onClick={() => handleRouteChange(ROUTES.HOME)}
            >
                <House size={32} weight="duotone" />
            </S.NavigationItem>

            <S.NavigationItem
                isActive={activeRoute === ROUTES.PERFIL}
                onClick={() => handleRouteChange(ROUTES.PERFIL)}
            >
                <User size={32} weight="duotone" />
            </S.NavigationItem>
        </S.Wrapper>
    );
}
