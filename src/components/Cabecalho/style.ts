import styled from 'styled-components'

export const CabecalhoEstilo = styled.header`
  background-color: ${({ theme }) => theme.secundaria};
  text-align: center;
  padding: 24px 0;

  h1 {
    color: ${({ theme }) => theme.principal};
    margin: 0;
    font-family: Lato, sans-serif;
    font-weight: bold;
  }
`
