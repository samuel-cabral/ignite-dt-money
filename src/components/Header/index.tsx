import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import { X } from '@phosphor-icons/react'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="dt money" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton type="button">
              Nova transação
            </NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="overlay" />

            <Dialog.Content className="content">
              <Dialog.Title className="title">Cadastrar transação</Dialog.Title>

              <Dialog.Description className="description">
                Preencha os campos abaixo para cadastrar uma nova transação
              </Dialog.Description>

              <Dialog.Close>
                <X size={24} />
              </Dialog.Close>

              <form>
                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
