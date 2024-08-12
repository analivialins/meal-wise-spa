import * as S from "./style"

type ButtonProps = {
    label?: string;
    icon?: React.ReactNode; 
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({children, icon, ...rest}: ButtonProps) {
    return(
        <S.Button {...rest}>
            {icon && <S.Icon>{icon}</S.Icon>}
            {children}
        </S.Button>
    )
}