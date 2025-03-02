import styled from "styled-components";

export const Container = styled.h1`
    display: flex;
    align-items: center;
    gap: .4rem;

    span {
        font-family: Jaro;
        font-weight: 400;
        font-size: ${({theme}) => theme.fontSize.xxxl};
        line-height: 35px;
        letter-spacing: -5%;
    }

`