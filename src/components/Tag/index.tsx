import * as S from "./style"

type TagProps = {
    label?: string;
    icon?: React.ReactNode; 
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Tag({label, icon}: TagProps) {
    return(
        <S.Wrapper>
            {icon && icon}
            {label}
        </S.Wrapper>
    )
}