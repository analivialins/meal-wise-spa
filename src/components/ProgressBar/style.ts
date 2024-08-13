import styled from 'styled-components';
import { theme } from '../../theme';

export const ProgressBarContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

`;

export const ProgressBarTrack = styled.div`
    width: 100%;
    height: 10px;
    background-color: ${theme.colors.primary.puregray};
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    margin: 0 .5rem;
`;

export const ProgressBarFill = styled.div<{ progress: number }>`
    width: ${({ progress }) => progress}%;
    height: 100%;
    background-color: ${theme.colors.brand.pink};
    border-radius: 5px;
    transition: width 0.3s ease;
`;

export const Label = styled.span`
    font-size: .875rem;
    color: ${theme.colors.primary.hardgray} ;

    width: fit-content;
`;