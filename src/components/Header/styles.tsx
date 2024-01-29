import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-100']};
  background: ${({ theme }) => theme['green-500']};
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;

  &:hover {
    background-color: ${({ theme }) => theme['green-700']};
    transition: background-color 0.5s;
  }
`
