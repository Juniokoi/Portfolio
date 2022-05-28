import styled from 'styled-components'
type Props = {
  fontSize: number;
}


export const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p {
color: #2d97de;
a {
  color: #fff;
  :hover {
    color: #2d97de;
  }
}
}
`
export const Title = styled.h1`
font-size: ${({fontSize}: Props) => `${fontSize}rem` || '2rem'};
color: #c10067;
`
