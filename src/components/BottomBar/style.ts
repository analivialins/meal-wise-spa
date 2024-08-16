import styled from "styled-components";
import { theme } from "../../theme";

interface NavigationItemProps {
    isActive: boolean;
}

export const Wrapper = styled.div`
    display: flex;
    background-color: ${theme.colors.grayscale.white};
    border-radius: 1rem;
    position: fixed;
    align-items: center;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 1rem;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1); 
`;

export const NavigationItem = styled.div<NavigationItemProps>`
    color: ${({ isActive }) => isActive ? theme.colors.brand.pink : theme.colors.primary.hardgray};
    border-radius: 1rem;
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center; 
    flex: 1;

    &:hover {
        color: ${theme.colors.brand.orange};
    }
`;
