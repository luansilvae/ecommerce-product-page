import styled, { css } from 'styled-components'

export const Container = styled.div<{ isModalOpen: boolean }>`
  height: 100vh;
  width: 100vw;

  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

  visibility: hidden;
  opacity: 0;
  transition: all 200ms ease-in-out;

  ${props =>
    props.isModalOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  max-width: 550px;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }

  > div {
    width: 100%;

    > .sneakerSlide {
      max-height: 550px;
      height: 100%;

      @media (max-width: 768px) {
      }
    }
  }
`
export const CloseModal = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: stretch;

  font-size: 26px;
  color: var(--primary);
`
