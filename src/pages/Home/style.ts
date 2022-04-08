import styled, { css } from 'styled-components'

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
`

const tablet = 'min-width: 768px'
const desktop = 'min-width: 1024px'

export const Main = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: calc(100vh - 68px);

  @media (min-width: 768px) {
    min-height: calc(100vh - 112px);
  }

  @media (${tablet}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
`

export const ProductInfo = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 20px;

  h1 {
    color: var(--primary);
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
  }

  h2 {
    color: var(--blue-darkest);
    font-size: 26px;
    margin: 15px 0;
    line-height: 1.1;

    @media (${tablet}) {
      font-size: 32px;
    }
    @media (${desktop}) {
      font-size: 46px;
    }
  }

  p {
    color: var(--blue-dark);
    font-size: 14px;
    line-height: 1.5;
  }
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`

export const ActualPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  strong {
    font-size: 25px;
  }

  span {
    background-color: var(--primary-light);
    color: var(--primary);
    font-weight: 700;
    padding: 5px 8px;
    border-radius: 5px;
  }
`

export const OldPrice = styled.span`
  color: var(--blue-dark);
  font-size: 14px;
  opacity: 0.6;
  text-decoration: line-through;
  font-weight: 700;
`

export const CartActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (${tablet}) {
    display: grid;
    grid-template-columns: 40% 60%;
    margin-top: 30px;
  }
`

export const CartControls = styled.div`
  background-color: var(--blue-light);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 10px;

  span {
    color: var(--blue-darkest);
    font-weight: 700;
    font-size: 14px;
  }

  > button {
    ${buttonStyle}
  }
`

export const Button = styled.div`
  ${buttonStyle}
  padding: 15px;
  background-color: var(--primary);
  color: var(--white);
  font-weight: 700;
  border-radius: 10px;
  width: 100%;
`
