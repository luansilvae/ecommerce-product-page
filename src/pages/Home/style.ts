import styled from 'styled-components'

export const Main = styled.main`
  background: var(--primary);
  min-height: calc(100vh - 68px);
  padding: 20px;

  @media (min-width: 768px) {
    min-height: calc(100vh - 112px);
  }
`
