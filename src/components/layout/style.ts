import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
    background-color: ${theme.colors.primary.puregray};
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    padding: 2rem;

    width: 100%;
    
  
`

export const ContentWrapper = styled.div<{$isMobile:boolean}>`
    background-color: ${theme.colors.grayscale.white};

    border-radius: 1rem;
    padding: 2rem;

    margin-bottom: 5rem;

    max-height: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    width: ${({ $isMobile }) => ($isMobile ? "100%" : "50%")};

`

export const Content = styled.div`
  width: 100%;
`

export const BottomBar = styled.div`

`