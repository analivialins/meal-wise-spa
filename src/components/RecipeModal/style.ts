import styled from "styled-components";
import { theme } from "../../theme";

interface ImageProps {
    backgroundImage: string;
    $isMobile?: boolean
}   

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
    width: 70rem;
    background-color: ${theme.colors.grayscale.white};
    border-radius: 1rem;
    max-height: 90%;
    overflow-y: auto;

`;

export const Cover = styled.img<ImageProps>`
    width: 100%;
    height: 20rem;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Title = styled.span`
    font-size: 2rem;
    font-weight: bold;
    padding: 2rem;
    max-width: 40rem;

    color: ${theme.colors.primary.hardgray}
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Calories = styled.div`
    color: ${theme.colors.brand.pink};
    font-weight: bold;
    display: flex;
    width: fit-content;
    height: fit-content;
    align-items: center;
    background-color: ${theme.colors.primary.lightpink};
    padding: .5rem;
    border-radius: .5rem;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    padding: 2rem;

    span{
        font-size: 1.3rem;
        font-weight: bold;
        color: ${theme.colors.primary.hardgray}
    }
`;

export const Ingredients = styled.div`
    li{
        margin-bottom: 1rem;
    }
`;

export const Prepares = styled.div`
    li{
        margin-bottom: 1rem;
    }

`;