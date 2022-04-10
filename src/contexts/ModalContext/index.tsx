import React, { createContext, ReactNode, useCallback, useState } from 'react'

interface ModalContextData {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext({} as ModalContextData)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}
