import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem 15rem;
    border: .1rem solid ${({theme}) => theme.colors.stone};
`

export const ExitButton = styled.button`
    display: flex;
    gap: .4rem;
    border: none;
    align-items: center;
    cursor: pointer;

    span {
        font-family: Montserrat;
        font-weight: 600;
        font-size: ${({theme}) => theme.fontSize.base};
        line-height: 1.95rem;
        letter-spacing: -5%;
    }

    &:hover {
        opacity: 0.7;
    }
`

export const Main = styled.main`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2.8rem;
    width: 103.6rem;
    margin: 6rem auto;
`

export const Footer = styled.footer`
    min-height: 18.8rem;
    background-color: ${({theme}) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
`