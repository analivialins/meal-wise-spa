import { useEffect } from "react";
import { createPortal } from "react-dom";
import * as S from "./styles";
import Button from "../Button";
import { X } from "@phosphor-icons/react";

interface ModalProps {
    children: React.ReactNode;
    closeModal: () => void;
    title: string;
}

export default function Modal({ children, closeModal, title }: ModalProps) {
    const handleKeyup = (event: KeyboardEvent) => {
        if (event.key === "Escape") closeModal();
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) closeModal();
    };

    useEffect(() => {
        window.addEventListener("keyup", handleKeyup);
        return () => {
            window.removeEventListener("keyup", handleKeyup);
        };
    }, []);

    return createPortal(
        <S.Wrapper onClick={handleClick}>
            <S.Overlay>
                <S.Title>
                    <h1>{title}</h1>
                    <Button variant="secondary" onClick={closeModal}><X weight="bold"/></Button>
                </S.Title>
                {children}
            </S.Overlay>
        </S.Wrapper>,
        document.body
    );
}
