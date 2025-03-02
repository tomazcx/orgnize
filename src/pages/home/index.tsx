import * as S from './style'
import LogoWhite from '../../assets/logo-white.svg'
import ExitIcon from '../../assets/exit.svg'
import { Title } from '../../components'
import { Column } from './components'
import { CardState, useCards } from '../../contexts/cards'
import { useAuth } from '../../contexts/auth'

export const Home = () => {
    const { logOut } = useAuth()
    const { updateCardState } = useCards()

    const columns = [
        {
            state: CardState.BACKLOG,
            title: "Backlog"
        },
        {
            state: CardState.IN_PROGRESS,
            title: "Fazendo"
        },
        {
            state: CardState.READY,
            title: "Pronto"
        },
        {
            state: CardState.IN_TEST,
            title: "Teste"
        },
        {
            state: CardState.APPROVED,
            title: "Aprovado"
        }
    ]

    const onDragStart = (e: React.DragEvent<HTMLDivElement>, cardId: string) => {
        e.dataTransfer.setData('cardId', cardId);
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>, newState: CardState) => {
        const cardId = e.dataTransfer.getData('cardId');
        updateCardState(cardId, newState)
    };

    return (
        <S.Container>
            <S.Header>
                <div></div>
                <Title />
                <S.ExitButton onClick={logOut} type='button'>
                    <img src={ExitIcon} alt="Logout icon" />
                    <span>sair</span>
                </S.ExitButton>
            </S.Header>
            <S.Main>
                {
                    columns.map(column => (
                        <Column
                            onDragOver={onDragOver}
                            onDragStart={onDragStart}
                            onDrop={onDrop}
                            key={`key-${column.title}`}
                            columnState={column.state}
                            title={column.title}
                        />
                    ))
                }
            </S.Main>
            <S.Footer>
                <img src={LogoWhite} alt="Logo" />
            </S.Footer>
        </S.Container>
    )
}