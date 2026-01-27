import styled from 'styled-components'

export const CabecalhoEstilo = styled.header`
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corSecundaria};
  padding: 24px;
  text-align: center;
`
