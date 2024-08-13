import Logo from "../../assets/images/logo.svg"
import { useDevice } from "../../hooks/useDevice"
import BottomBar from "../BottomBar"

import * as S from "./style"

export default function Layout({children}:any) {
    const { isMobile } = useDevice()
    return(
        <S.Wrapper>
            <S.ContentWrapper>
                <img src={Logo}/>
                <S.Content $isMobile={isMobile}>
                    {children}
                </S.Content>
            </S.ContentWrapper>
            <BottomBar/>
        </S.Wrapper>
    )
}