import { InputHTMLAttributes } from 'react'
import * as S from './style'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

type InputProps<T extends FieldValues> = {
    label: string
    register: UseFormRegister<T>
    errorMessage?: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input<T extends FieldValues>({ label, register, errorMessage, ...rest }: InputProps<T>) {
    return (
        <S.Container>
            <label htmlFor={rest.id}>{label}</label>
            <input {...register(rest.id as Path<T>)} {...rest} />
            {errorMessage ? <S.ErrorMessage>{errorMessage}</S.ErrorMessage> : null}
        </S.Container>
    )
}