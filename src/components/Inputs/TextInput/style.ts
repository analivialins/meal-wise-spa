import styled from "styled-components"
import { theme } from "../../../theme"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .2rem;

    input {
        padding: .8rem;
        border-radius: .3rem;
        font-size: 1rem;
        border: none;
        background-color: ${theme.colors.primary.puregray};
        outline: none;
        font-family: "Nunito", sans-serif;
    }
`;

export const Label = styled.div`
    font-size: 1rem;
    color: ${theme.colors.brand.pink};
    font-weight: bold;
`