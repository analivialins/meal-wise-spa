import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    overflow-y: auto;
    width: 100vw;
    height: 100vh;
    background-color: rgba(63, 63, 63, 0.66);
`;

export const Overlay = styled.div`
    margin: 0.5rem;
    padding: 1rem;
    background-color: ${theme.colors.grayscale.white};
    border-radius: 1rem;
    max-height: 90%;
    overflow-y: auto;
`;

export const Title = styled.div`
    width: 100%;
    color: ${theme.colors.primary.hardgray};
    padding: 0.5rem 0;
    
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 10rem;
    h1{
        margin: 0;
    }

`;
