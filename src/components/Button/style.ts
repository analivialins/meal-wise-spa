import styled from "styled-components";
import { theme } from "../../theme";

export const Button = styled.button`
    background-color: ${theme.colors.brand.pink};
    color: ${theme.colors.grayscale[0]};

    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;

    font-size: 1rem;

    border: none;
    padding: .5rem 2rem;
    border-radius: .5rem;

    text-align:center;
    cursor: pointer;
`

export const Icon = styled.div`

`