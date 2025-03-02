import {  ButtonHTMLAttributes } from 'react'
import * as S from './style'
import { NavLinkProps } from 'react-router'

export enum ButtonVariation {
    DEFAULT = 'DEFAULT',
    ANCHOR = 'ANCHOR'
}

type ButtonProps = {
    children: React.ReactNode
    variation?: ButtonVariation
} & (ButtonHTMLAttributes<HTMLButtonElement> | NavLinkProps & React.RefAttributes<HTMLAnchorElement>)

export const Button = ({ children, variation = ButtonVariation.DEFAULT, ...rest }: ButtonProps) => {

    if(variation === ButtonVariation.ANCHOR){
        return <S.AnchorContainer {...rest as NavLinkProps & React.RefAttributes<HTMLAnchorElement>}>{children}</S.AnchorContainer>   
    }

    return (
        <S.Container {...rest as ButtonHTMLAttributes<HTMLButtonElement>}>{children}</S.Container>
    )
}