import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" />
          <input type="number" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}