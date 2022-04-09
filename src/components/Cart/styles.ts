import styled, { css } from 'styled-components'

export const Container = styled.div<{ isCartOpen: boolean }>`
  width: calc(100% - 20px);

  max-height: 350px;
  background-color: var(--white);
  box-shadow: 0px 5px 20px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  position: absolute;
  top: 68px;
  right: 0;
  left: 0;
  z-index: 50;

  margin: 10px auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  visibility: hidden;
  opacity: 0;
  transform: translateY(-20%);

  transition: all 200ms ease-in-out;
  -webkit-transition: all 200ms ease-in-out;

  ${props =>
    props.isCartOpen &&
    css`
      visibility: visible;
      opacity: 1;
      transform: translateY(0%);
    `}

  @media (min-width: 768px) {
    width: 360px;
    top: 88px;
    right: 0;
    left: unset;
  }
`

export const CartHeader = styled.header`
  border-bottom: solid 1px var(--border);

  h3 {
    color: var(--blue-darkest);
    font-size: 15px;
    padding: 20px;
  }
`

export const CartContent = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  > button {
    width: calc(100% - 40px);
    margin: 0 auto;
  }
`

export const EmptyCart = styled.strong`
  height: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue-dark);
  font-size: 15px;
`
export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  overflow-y: auto;

  /* ===== Scrollbar ===== */
  scrollbar-width: auto;
  scrollbar-color: var(--primary) var(--white);

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: var(--blue-light);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 10px;
    border: solid 3px var(--white);
  }

  > li {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;

    > img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
    }

    .productInfo {
      width: 100%;
      display: flex;
      gap: 5px;
      flex-direction: column;
      overflow: hidden;

      h4,
      span,
      strong {
        font-size: 16px;
        color: var(--blue-dark);
      }

      > h4 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        font-weight: 400;
      }

      strong {
        margin-left: 10px;
        color: var(--blue-darkest);
      }
    }

    > button {
      display: flex;
      align-items: stretch;
      border: none;
      background: none;
      cursor: pointer;
      margin-left: auto;
    }
  }
`
