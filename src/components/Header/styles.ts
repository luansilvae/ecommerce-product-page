import styled, { css } from 'styled-components'

type MenuProps = {
  active: boolean
}

const tablet = 'min-width: 768px'

const buttonStyle = css`
  display: flex;
  align-items: stretch;
  cursor: pointer;
  background: transparent;
  border: none;
`

export const Container = styled.header`
  background-color: var(--white);
  padding: 0 20px;
  height: 68px;
  position: relative;

  @media (${tablet}) {
    position: unset;
  }

  display: flex;
  align-items: center;

  @media (${tablet}) {
    height: 112px;
  }
`

export const HeaderWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  background-color: var(--white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${tablet}) {
    border-bottom: 1px solid var(--border);
    position: relative;
  }
`

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  height: 100%;

  @media (${tablet}) {
    column-gap: 50px;
  }
`

export const MenuButton = styled.button`
  ${buttonStyle}
  cursor: pointer;

  @media (${tablet}) {
    display: none;
  }
`

export const Logo = styled.a``

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;

  @media (${tablet}) {
    column-gap: 40px;
  }
`

export const CartButton = styled.button`
  ${buttonStyle}
  cursor: pointer;

  position: relative;

  > span {
    background-color: var(--primary);
    color: var(--white);
    font-weight: 700;
    position: absolute;
    z-index: 20;
    font-size: 12px;
    top: -9px;
    right: -8px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 16px;
    border-radius: 10px;
  }
`

export const Avatar = styled.button`
  ${buttonStyle}

  width: 30px;
  height: 30px;
  border-radius: 50%;

  border: solid 1px var(--blue-light);

  transition: border-color 200ms ease-in-out;

  @media (${tablet}) {
    width: 50px;
    height: 50px;

    border-width: 2px;
  }

  :hover {
    border-color: var(--primary);
  }

  img {
    width: 100%;
    height: 100%;
  }
`

export const DesktopMenu = styled.ul`
  display: none;

  @media (${tablet}) {
    display: flex;
    align-items: center;
    gap: 30px;
    height: 100%;

    li {
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;

      a {
        color: var(--blue-dark);

        :after {
          content: '';
          position: absolute;
          width: 0;
          left: 0;
          bottom: 0;
          height: 4px;
          background-color: var(--primary);
          transition: all 200ms ease-in-out;
        }

        &:hover {
          color: var(--blue-darkest);
          transition: color 200ms ease-in-out;

          :after {
            width: 100%;
          }
        }
      }
    }
  }
`

export const MobileMenu = styled.div<MenuProps>`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;

  @media (${tablet}) {
    display: none;
  }

  ${props =>
    props.active &&
    css`
      visibility: visible;
      opacity: 1;

      ${MenuContent} {
        visibility: visible;
        opacity: 1;
        transform: translateX(0%);
      }
    `}
`

export const MenuContent = styled.div`
  background-color: var(--white);
  width: 70%;
  padding: 25px 20px;

  visibility: hidden;
  opacity: 0;
  transform: translateX(-8%);
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
`

export const CloseMenu = styled.button`
  ${buttonStyle}
  margin-bottom: 40px;
`

export const MenuList = styled.ul`
  list-style: none;

  a {
    color: var(--darkest-blue);
    font-weight: 700;
  }

  li + li {
    margin-top: 20px;
  }
`
