import styled from "styled-components";
import { theme } from "../../../../theme";
import BackgroundImg from '../../../../assets/images/background-login.svg';

export const Container = styled.div`
    display: grid;
    flex-direction: column;
    height: 100vh;
`

export const Content = styled.div`
    margin-top: 10rem;
    padding:3rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

export const ImageBox = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

`

export const Title = styled.div`
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

export const InputsContainer = styled.form`
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

export const Background = styled.div`
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url(${BackgroundImg})
`