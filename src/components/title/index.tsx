import * as S from './style'
import logo from '../../assets/logo.svg'

export const Title = () => {
    return (
        <S.Container>
            <span>ORGNIZE</span>
            <img src={logo} alt="Logo" />
        </S.Container>
    )
}