import React from 'react'
import { Container } from './style'

export function Nav () {
  return (
    <Container>
      <ul>
        <li>
          <a href="#">
             Inicio
          </a>
        </li>
        <li>
          <a href="#">
             Sobre
          </a>
        </li>
        <li>
          <a href="#">
             Projetos
          </a>
        </li>
        <li>
          <a href="#">
             Baixar CV
          </a>
         </li>
      </ul>
    </Container>
  )
}
