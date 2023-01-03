import * as React from "react";
import Section from "./Section";
import Skills from "./Skills";
import SkillContextProvider from "./SkillContext";
import { Container } from "./AboutStyle";

export default function About() {
    return (
        <>
            <Container id="about">
                <SkillContextProvider>
                    <Section />
                    <Skills />
                </SkillContextProvider>
            </Container>
        </>
    );
}
