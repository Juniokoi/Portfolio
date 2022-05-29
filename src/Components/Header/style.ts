import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: ${props => props.theme.colors.background};
  color: ${ props => props.theme.colors.text };
  padding: 0 40px;
  `