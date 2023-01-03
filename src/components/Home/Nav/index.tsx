import * as React from "react";
import { Container } from "./style";

export function Nav() {
    return (
        <Container>
            <ul>
                <li>
                    <a href="#home">Inicio</a>
                </li>
                <li>
                    <a href="#about">Sobre</a>
                </li>
                <li>
                    <a href="#projects">Projetos</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </Container>
    );
}
