import styled from "styled-components";
import { CardState } from "../../../../contexts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    align-items: center;
`

export const Title = styled.h2`
    display: flex;
    gap: .4rem;
    align-items: center;

    span {
        font-family: Montserrat;
        font-weight: 600;
        font-size: ${({theme}) => theme.fontSize.base};
        line-height: 1.95rem;
        letter-spacing: -5%;
    }
`

export const CardsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`

export const StatusBall = styled.div<{state: CardState}>`
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 5rem;

    background-color: ${({state, theme}) => {
        switch(state){
            case CardState.BACKLOG:
                return theme.colors.yellow
            case CardState.IN_PROGRESS:
                return theme.colors.orange
            case CardState.READY:
                return theme.colors.green
            case CardState.IN_TEST:
                return theme.colors.purple
            case CardState.APPROVED:
                return theme.colors.primary
        }
    }}
` 