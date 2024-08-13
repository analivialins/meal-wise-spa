import * as S from "./style"

type ButtonProps = {
    label?: string;
    icon?: React.ReactNode; 
    variant?: "primary" | "secondary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({children, icon, variant, ...rest}: ButtonProps) {
    return(
        <S.Button {...rest} $type={variant ? variant : "primary"}>
            {icon && <S.Icon>{icon}</S.Icon>}
            {children}
        </S.Button>
    )
}