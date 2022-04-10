import React from 'react'
import { useModal } from '../../hooks/useModal'
import Gallery from '../Gallery'

import { Container, ModalWrapper, CloseModal } from './styles'

export const PreviewModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal()

  const handleOutsideClick = (event: any) => {
    if (event.target.id === 'preview') {
      closeModal()
    }
  }

  return (
    <Container
      isModalOpen={isModalOpen}
      id="preview"
      onClick={handleOutsideClick}
    >
      <ModalWrapper>
        <CloseModal onClick={closeModal}>&#10006;</CloseModal>
        <Gallery />
      </ModalWrapper>
    </Container>
  )
}
