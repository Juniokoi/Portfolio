import styled from "styled-components";
export interface ContactProps {
  backgroundImg?: string;
}
export const Container = styled.div<ContactProps>`
  &::before {
    background-image: ${(props) => props.backgroundImg};
    filter: blur(10px);
  }

`;
