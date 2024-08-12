import styled from "styled-components";
import { theme } from "../../../../theme";
import BackgroundImg from '../../../../assets/images/background-login.svg';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    overflow:hidden;
`

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    align-items: center;
    justify-content: start;
    height: 70vh;
    padding: 0 3rem;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Logo = styled.img`
    width: 30rem;

    @media (max-width: 1000px) {
        width: 20rem;
    }
`

export const Subtitle = styled.span`
    font-size: 1.3rem;
    font-weight: bold;
    color: ${theme.colors.brand.pink};
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    button{
        margin-top: 2rem;
    }
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`


export const InputTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    h1{
        margin: 0;
        color: ${theme.colors.brand.pink};
    };

    span{
       color: ${theme.colors.primary.hardgray};

       a{
            text-decoration: none;
            color: ${theme.colors.brand.pink};
            font-weight: bold;
       }
    }
`

export const Background = styled.div`
    position: relative;
    height: 40%;
    width: 100%;
    background-image: url(${BackgroundImg})
`