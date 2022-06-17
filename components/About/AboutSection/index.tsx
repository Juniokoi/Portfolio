import * as React from 'react'
import { Container, Section } from './style'
export default function AboutSection() {
  return (
    <Container>
      <h2>
        Sobre <span className="bodyFont">mim</span>.
      </h2>
      <hr />
      <Section>
        <p>
          Fabio Junio “Koi” dos Santos é um jovem rapaz que teve seu primeiro
          contato ao customizar sua página no Tumblr em meados de 2013, porém,
          foi cursando Engenharia Elétrica ao estudar a linguagem C que
          descobriu que sua vocação é realmente programação!
        </p>
        <p>
          Desde então vem dedicando-se com diversos cursos e bootcamps afim de
          criar PWAs mais eficientes, chamativas (no bom sentido) e com
          acessibilidade.
        </p>
        <p>
          Ama arte, cores e afins, sempre se inspirando e trazendo elementos aos
          seus websites feitos além de fazer publicações semanais sobre tópicos
          que acha necessário e útil para ajudar outros desenvolvedores na
          trilha da programação.
        </p>
      </Section>
    </Container>
  )
}
