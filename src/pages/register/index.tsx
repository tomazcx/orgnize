import { z } from 'zod';
import { Button, ButtonVariation, Input, Title } from '../../components'
import * as S from './style'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../contexts/auth';

const registerSchema = z
    .object({
        email: z.string().min(1, { message: 'Email é obrigatório' }).email('Email inválido'),
        password: z.string().min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
        confirmPassword: z.string().min(6, { message: 'Confirmação de senha deve ter no mínimo 6 caracteres' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas devem ser iguais',
        path: ['confirmPassword'],
    });

type RegisterFormData = z.infer<typeof registerSchema>;

export const Register = () => {
    const {register:registerFirebase} = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormData) => {
        await registerFirebase(data.email, data.password)
    };

    return (
        <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <Title />
                <S.Subtitle>Cadastre-se</S.Subtitle>
                <S.InputsContainer>
                    <Input<RegisterFormData>
                        label='Email'
                        id='email'
                        name='email'
                        type='email'
                        register={register}
                        errorMessage={errors.email?.message}
                    />
                    <Input<RegisterFormData>
                        label='Senha'
                        id='password'
                        name='password'
                        type='password'
                        register={register}
                        errorMessage={errors.password?.message}
                    />
                    <Input<RegisterFormData>
                        label='Confirmar senha'
                        id='confirmPassword'
                        name='confirmPassword'
                        type='password'
                        register={register}
                        errorMessage={errors.confirmPassword?.message}
                    />
                </S.InputsContainer>
                <S.ButtonsContainer>
                    <Button to={'/login'} variation={ButtonVariation.ANCHOR}>Já possuo uma conta</Button>
                    <Button>Cadastrar-se</Button>
                </S.ButtonsContainer>
            </S.Form>
        </S.Container>
    )
}