import * as S from "./style"

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
}

export default function TextInput({label, ...props}:TextInputProps) {
    return(
        <S.Wrapper>
            <S.Label>{label}</S.Label>
            <input {...props}/>
        </S.Wrapper>
    )
}