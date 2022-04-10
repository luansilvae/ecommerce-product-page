import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext'

export const useModal = () => {
  const { closeModal, isModalOpen, openModal } = useContext(ModalContext)

  return { closeModal, isModalOpen, openModal }
}
