import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-300']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem 2rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-300']};
    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['green-500']};
      border-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      transition:
        background-color 0.2s,
        border-color 0.2s,
        color 0.2s;
    }
  }
`
