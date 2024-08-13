import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
    background-color: ${theme.colors.primary.puregray};
    height: 100vh;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    padding: 2rem;

    width: 100%;
    
  
`

export const ContentWrapper = styled.div`
    background-color: ${theme.colors.grayscale.white};

    border-radius: 1rem;
    padding: 2rem;

    max-height: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;
`

export const Content = styled.div<{$isMobile:boolean}>`
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "40rem")};
`

export const BottomBar = styled.div`

`