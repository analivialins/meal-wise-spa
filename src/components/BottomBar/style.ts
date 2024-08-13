import styled from "styled-components";
import { theme } from "../../theme";

interface NavigationItemProps {
    isActive: boolean;
}

export const Wrapper = styled.div`
    display: flex;
    background-color: ${theme.colors.grayscale.white};
    border-radius: 1rem;

    position: absolute;
    top: 87%;
`;

export const NavigationItem = styled.div<NavigationItemProps>`
    color: ${({ isActive }) => isActive ? theme.colors.brand.pink : theme.colors.primary.hardgray};
    border-radius: 1rem;
    padding: 1rem 2rem;
    cursor: pointer;

    &:hover {
        color: ${theme.colors.brand.orange};
    }
`;
