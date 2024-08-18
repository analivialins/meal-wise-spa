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

export default function AuthorizationWeb({handleSubmit, email, setEmail, password, setPassword}:AuthorizationProps) {
    return (
        <S.Container>
        <S.ContentContainer >
            <S.LogoContainer>
            <S.Logo src={Logo}/>
            <S.Subtitle>Planeje sua dieta. Alcance seus objetivos.</S.Subtitle>
            </S.LogoContainer>

            <S.InputsContainer>
            <S.InputTitle>
                <h1>Acesse sua conta</h1>
                <span>
                Ainda não tem uma conta? <a href="#">Crie agora!</a>
                </span>
            </S.InputTitle>

            <form onSubmit={handleSubmit}>
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
                <div>
                <Button type="submit">
                    Entrar
                </Button>
                {/* {isError && <p>Error: {error.message}</p>} */}
                </div>
            </form>
            </S.InputsContainer>
        </S.ContentContainer>

        <S.Background/>
        </S.Container>
    );
}
