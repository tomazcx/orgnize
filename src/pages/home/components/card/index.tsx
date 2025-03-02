import * as S from './style'

type CardProps = {
    id: string
    title: string
    description: string
    onDragStart: (e: React.DragEvent<HTMLDivElement>, cardId: string) => void;
}

export const Card = ({ title, description, id, onDragStart }: CardProps) => {
    return (
        <S.Container draggable onDragStart={(e) => onDragStart(e, id)}>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </S.Container>
    )
}