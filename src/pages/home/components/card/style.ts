import styled from "styled-components";

export const Container = styled.div`
    border: .1rem solid ${({theme}) => theme.colors.gray};
    border-radius: 1.6rem;
    width: 20.4rem;
    padding: 2.65rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .8rem;
    cursor: grab;
`

export const Title = styled.span`
    font-weight: 600;
    font-size: ${({theme}) => theme.fontSize.xl};
    line-height: 2.438rem;
    letter-spacing: -5%;    
    text-align: center;
`

export const Description = styled.span`
    font-weight: 600;
    font-size: ${({theme}) => theme.fontSize.xSmall};
    line-height: 1.463rem;
    letter-spacing: -5%;
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
`