import { CardState, useCards } from '../../../../contexts/cards'
import { Card } from '../card'
import { CardCreator } from '../card-creator'
import { DeleteCard } from '../delete-card'
import * as S from './style'

type ColumnProps = {
    columnState: CardState
    title: string
    onDragStart: (e: React.DragEvent<HTMLDivElement>, cardId: string) => void;
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    onDrop: (e: React.DragEvent<HTMLDivElement>, newState: CardState) => void;
}

export const Column = ({ columnState, title, onDragStart, onDragOver, onDrop }: ColumnProps) => {
    const { cards } = useCards()

    return (
        <S.Container
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, columnState)}
        >
            <div>
                <S.Title>
                    <S.StatusBall state={columnState}></S.StatusBall>
                    <span>
                        {title}
                    </span>
                </S.Title>
            </div>
            <S.CardsList>
                {
                    cards
                        .filter(card => card.state === columnState)
                        .map(card => (
                            <Card
                                onDragStart={onDragStart}
                                key={card.id}
                                {...card} />
                        ))
                }
            </S.CardsList>
            {columnState === CardState.BACKLOG ?
                (
                    <>
                        <CardCreator />
                        <DeleteCard />
                    </>
                ) : null}
        </S.Container>
    )
}