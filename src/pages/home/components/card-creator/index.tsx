import * as S from './style'
import PlusIcon from '../../../../assets/plus.svg'
import { useState } from 'react';
import { Button } from '../../../../components';
import { CardState, useCards } from '../../../../contexts';

export const CardCreator = () => {
    const {createCard} = useCards()

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleConfirm = () => {
        setTitle('');
        setDescription('');
        setIsEditing(false);
        createCard({ title, description, state: CardState.BACKLOG })
    };

    if (!isEditing) {
        return (
            <S.Container onClick={() => setIsEditing(prevState => !prevState)}>
                <img src={PlusIcon} alt="Plus Icon" />
            </S.Container>
        )
    }

    return (
        <S.EditContainer>
            <S.Input
                type="text"
                placeholder="Digite o título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <S.Input
                type="text"
                placeholder="Digite a descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button onClick={handleConfirm}>Confirmar</Button>
        </S.EditContainer>
    )

}