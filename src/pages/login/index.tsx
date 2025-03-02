import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, ButtonVariation, Input, Title } from '../../components';
import * as S from './style';
import { useAuth } from '../../contexts/auth';

const loginSchema = z.object({
    email: z.string().min(1, { message: 'Email é obrigatório' }).email('Email inválido'),
    password: z.string().min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const Login = () => {
    const { login: loginFirebase } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            await loginFirebase(data.email, data.password);
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <Title />
                <S.SubtitleContainer>
                    <S.Subtitle>
                        Bem Vindo<span>!</span>
                    </S.Subtitle>
                    <S.Description>Possui uma conta?</S.Description>
                </S.SubtitleContainer>
                <S.InputsContainer>
                    <Input<LoginFormData>
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        register={register}
                        errorMessage={errors.email?.message}
                    />
                    <Input<LoginFormData>
                        label="Senha"
                        id="password"
                        name="password"
                        type="password"
                        register={register}
                        errorMessage={errors.password?.message}
                    />
                </S.InputsContainer>
                <S.ButtonsContainer>
                    <Button to={'/register'} variation={ButtonVariation.ANCHOR}>
                        Cadastrar-se
                    </Button>
                    <Button type="submit">Entrar</Button>
                </S.ButtonsContainer>
            </S.Form>
        </S.Container>
    );
};
