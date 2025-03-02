import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;

    label {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 16px;
        line-height: 19.5px;
        letter-spacing: -5%;
    }

    input {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 16px;
        line-height: 19.5px;
        letter-spacing: -5%;
        border: none;
        height: 4.8rem;
        background-color: ${({theme}) => theme.colors.slate};
    }
`

export const ErrorMessage = styled.span`
    color: ${({theme}) => theme.colors.red};
    font-size: ${({theme}) => theme.fontSize.small};
`