import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
    background-color: ${theme.colors.primary.lightblue};
    color: ${theme.colors.primary.blue};

    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .2rem .5rem;

    font-weight: 500;
    font-size: .875rem;
    
    border-radius: .3rem;

    width: fit-content;
`