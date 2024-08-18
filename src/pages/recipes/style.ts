import styled from "styled-components";
import { theme } from "../../theme";

export const Title = styled.h1 `
    color: ${theme.colors.primary.hardgray};
    font-size: 2rem;
    margin-top: 3rem;
`

export const TitleWrapper = styled.div `
    display: flex;
    gap: 2rem;
    align-items: baseline;
`

export const RecipesCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    flex-wrap:wrap;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    margin-top: 3rem;
`