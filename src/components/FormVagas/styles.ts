import styled from 'styled-components'

export const FormStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const InputCampo = styled.input`
  padding: 0 16px;
  outline-color: ${({ theme }) => theme.principal};
  border: none;
`

export const BtnPesq = styled.button`
  background-color: ${({ theme }) => theme.principal};
  border: 1px solid ${({ theme }) => theme.principal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.secundaria};
  margin-left: 8px;
  cursor: pointer;
`
