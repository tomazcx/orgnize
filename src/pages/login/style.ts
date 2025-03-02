import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${({theme}) => theme.colors.silver};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    background-color: ${({theme}) => theme.colors.white};
    border: .1rem solid ${({theme}) => theme.colors.primary};
    padding: 4.4rem 3.65rem;
    border-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
    max-width: 44.1rem;
    width: 90%;
`

export const SubtitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: .4rem;
`

export const Subtitle = styled.h2`
    font-family: Jaro;
    font-weight: 400;
    font-size: ${({theme}) => theme.fontSize.xxxxxl};
    line-height: 3.5rem;
    letter-spacing: 5%;

    span {
        color: ${({theme}) => theme.colors.primary}; 
        font-family: Jaro;
        font-weight: 400;
        font-size: ${({theme}) => theme.fontSize.xxxxxl};
        line-height: 3.5rem;
        letter-spacing: 3%;
    }
`

export const Description = styled.p`
    font-family: Montserrat;
    font-weight: 500;
    font-size: ${({theme}) => theme.fontSize.xl};
    line-height: 2.438rem;
    letter-spacing: 0%;
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`