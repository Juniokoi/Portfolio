import * as React from 'react'
import Section from './Section'
import Skills from './Skills'
import { Container } from './AboutStyle'

export default function About() {
  return (
    <>
      <Container>
        <Section />
        <Skills />
      </Container>
    </>
  )
}
