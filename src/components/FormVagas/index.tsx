import { FormEvent, useState } from 'react'
import { FormStyle, BtnPesq, InputCampo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <FormStyle onSubmit={aoEnviarForm}>
      <InputCampo
        type="search"
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTermo(e.target.value)
        }
      />
      <BtnPesq type="submit">Pesquisar</BtnPesq>
    </FormStyle>
  )
}

export default FormVagas
