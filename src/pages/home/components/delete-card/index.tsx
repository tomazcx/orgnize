import * as S from './style'
import TrashIcon from '../../../../assets/trash.svg'
import { useCards } from '../../../../contexts'

export const DeleteCard = () => {
    const { deleteCard } = useCards()
    
    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        deleteCard(e.dataTransfer.getData('cardId'))
    };

    return (
        <S.Container onDragOver={onDragOver} onDrop={onDrop}>
            <img src={TrashIcon} alt="Trash Icon" />
        </S.Container>
    )
}