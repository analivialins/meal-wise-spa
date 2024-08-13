import styled from "styled-components";
import { theme } from "../../theme";

export const Button = styled.button<{$type : "primary" | "secondary"}>`
    background-color: ${({ $type }) => 
    $type === "primary" ? theme.colors.brand.pink : theme.colors.primary.lightpink};

    color: ${({ $type }) => 
    $type === "primary" ? theme.colors.grayscale.white : theme.colors.brand.pink};

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