import * as S from './style';
import Logo from '../../../../assets/images/logo.svg';
import Button from '../../../../components/Button';
import TextInput from '../../../../components/Inputs/TextInput';

interface AuthorizationProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export default function AuthorizationMobile({handleSubmit, email, setEmail, password, setPassword}:AuthorizationProps) {

    return (
        <S.Container>
            <S.Background/>

           

            <S.Content>
                <S.ImageBox>
                    <img src={Logo} width={300} />
                </S.ImageBox>

                <S.Title>
                    <h1>Acesse sua conta</h1>
                    <span>
                    Ainda não tem uma conta? <a href="#">Crie agora!</a>
                    </span>
                </S.Title>

                <S.InputsContainer onSubmit={handleSubmit}>
                        <S.Inputs>
                        <TextInput
                            label="E-mail"
                            placeholder="Insira seu E-mail"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextInput
                            label="Senha"
                            placeholder="Insira sua Senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </S.Inputs>
                        <Button type="submit">
                            Entrar
                        </Button>
                        {/* {isError && <p>Error: {error.message}</p>} */}
            </S.InputsContainer>

            </S.Content>

        </S.Container>
    );
}