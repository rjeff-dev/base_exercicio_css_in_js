import styled from 'styled-components'

export const Vaga = styled.li`
  font-family: Lato, sans-serif;
  border: 1px solid ${({ theme }) => theme.principal};
  background-color: ${({ theme }) => theme.secundaria};
  color: ${({ theme }) => theme.principal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.principal};
    color: ${({ theme }) => theme.secundaria};

    a {
      border-color: ${({ theme }) => theme.principal};
      background-color: ${({ theme }) => theme.secundaria};
      color: ${({ theme }) => theme.principal};
    }
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border: 1px solid ${({ theme }) => theme.secundaria};
  background-color: ${({ theme }) => theme.principal};
  color: ${({ theme }) => theme.secundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
