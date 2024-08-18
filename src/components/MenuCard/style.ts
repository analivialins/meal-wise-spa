import styled from 'styled-components';
import { theme } from '../../theme';

interface ImageProps {
    backgroundImage: string;
}   

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    
    h2 {
        font-size: 1.2rem;
        color: ${theme.colors.primary.hardgray};
        margin: 0;
        width: 12rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    p{
        display: flex;
        align-items: center;
        color: ${theme.colors.brand.pink};
        font-weight: bold;
        gap: .5rem;
        background-color: ${theme.colors.primary.lightpink};
        width: fit-content;
        padding: .3rem .5rem;
        border-radius: .5rem;
        font-size: .8rem;
    }
`

export const Image = styled.div<ImageProps>`
    width: 100%;
    height: 8rem;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: .5rem;
`;