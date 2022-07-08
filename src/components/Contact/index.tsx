import { Button } from "@mui/material";
import React from "react";
import { Container, Elements, Wrapper, Caller, Header, Footer } from "./style";

export function Contact() {
  return (
    <Container>
      <Wrapper>
        <Elements>
          <Header>
            <h2>
              Vamos nos
              <br />
              &nbsp;conectar !
            </h2>
            <section>
              <h3>Estou sempre interessado em:</h3>
              <ul>
                <Items />
              </ul>
            </section>
          </Header>
          <Caller>
            Tem um projeto em mente?
            <a href="mailto:juniokoi@hotmail.com">
              <Button variant="contained">me chama!</Button>
            </a>
          </Caller>
        </Elements>
        <Footer>Design && Code by Juniokoi</Footer>
      </Wrapper>
    </Container>
  );
}
const interests = [
  {
    title: "Desenvolvimento Front-end",
    subject: "I really love pizza",
  },
  {
    title: "UI/UX Design",
    subject: "I really love pizza",
  },
  {
    title: "Pizza",
    subject: "I really love pizza",
  },
];

function Items() {
  return (
    <>
      {interests.map(({ title, subject }, index) => (
        <a key={index} href={"mailto:juniokoi@hotmail.com?subject=" + subject}>
          <li>{title}</li>
        </a>
      ))}
    </>
  );
}
