import styled from "styled-components";

export const Container = styled.div`
    border: .2rem dashed ${({theme}) => theme.colors.red};
    background-color: ${({theme}) => theme.colors.softRed};
    width: 20rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.6rem;
    cursor: pointer;
`