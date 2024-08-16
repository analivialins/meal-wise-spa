import Logo from "../../assets/images/logo.svg"
import { useDevice } from "../../hooks/useDevice"
import BottomBar from "../BottomBar"

import * as S from "./style"

export default function Layout({children}:any) {
    const { isMobile } = useDevice()
    return(
        <S.Wrapper>
            <S.ContentWrapper $isMobile={isMobile}>
                <img src={Logo}/>
                <S.Content >
                    {children}
                </S.Content>
            </S.ContentWrapper>
            <BottomBar/>
        </S.Wrapper>
    )
}