import styled from "styled-components";
import { theme } from "../../theme";
import ProgressBar from "../../components/ProgressBar";

export const Title = styled.h1 `
    color: ${theme.colors.primary.hardgray};
    font-size: 2rem;
    margin-top: 3rem;
`

export const Infos = styled.div <{$isMobile:boolean}>`
    display: flex;
    flex-direction: column;
    gap: ${({ $isMobile }) => ($isMobile ? "2rem" : "1.5rem")};

`

export const TitleInfos = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

    margin-top: 2rem;

    font-weight: bold;
    color: ${theme.colors.brand.pink};
  
`

export const ActualWeigth = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  
`
export const InfosContent = styled.div <{$isMobile:boolean}>`
    display: flex;
    flex-direction: ${({ $isMobile }) => ($isMobile ? "column" : "row")};
    align-items: ${({ $isMobile }) => ($isMobile ? "start" : "center")};
    gap: .5rem;

    width: 100%;

    button {
        margin-left: ${({ $isMobile }) => ($isMobile ? "0" : "10%")};
    }
`

export const Menus = styled.div`
    display: flex;
    flex-direction:column;
    margin-top: 3rem;
`

export const RecipesCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    flex-wrap:wrap;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    margin-top: 3rem;
`

export const TitleMenus = styled.div`
    display: flex;
    flex-direction:column;
    gap: .5rem;

    h1{
        margin: 0;
        color: ${theme.colors.primary.hardgray};
    }

    span{
        color: ${theme.colors.brand.pink};
        font-weight: bold;
        display: flex;
        align-items: center;
    }
`
