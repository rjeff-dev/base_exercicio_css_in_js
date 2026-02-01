// src/containers/ListaVagas/styles.ts
import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;
  padding: 0;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
