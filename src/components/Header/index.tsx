import React, { useCallback, useState } from 'react'

import {
  Container,
  HeaderWrapper,
  LeftContent,
  MenuButton,
  Logo,
  RightContent,
  CartButton,
  Avatar,
  MobileMenu,
  MenuContent,
  CloseMenu,
  MenuList,
  DesktopMenu
} from './styles'

export const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false)

  const handleToggleMenu = useCallback(() => {
    setMenuActive(state => !state)
  }, [])

  const handleOutsideClick = useCallback((event: any) => {
    if (event.target.id === 'mobile-menu') setMenuActive(false)
  }, [])

  return (
    <Container>
      <HeaderWrapper>
        <LeftContent>
          <MenuButton
            type="button"
            aria-label="Menu Button"
            onClick={handleToggleMenu}
            tabIndex={0}
          >
            <img src="images/icon-menu.svg" alt="Menu icon" />
          </MenuButton>

          <Logo
            href="#"
            tabIndex={0}
            aria-label="Logo Sneakers"
            title="Logo Sneakers"
          >
            <img src="images/logo.svg" alt="Logo Sneakers" />
          </Logo>

          <DesktopMenu>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </DesktopMenu>
        </LeftContent>

        <MobileMenu
          active={menuActive}
          id="mobile-menu"
          onClick={handleOutsideClick}
          tabIndex={0}
        >
          <MenuContent>
            <CloseMenu
              type="button"
              aria-label="Close Button"
              onClick={handleToggleMenu}
              tabIndex={0}
            >
              <img src="images/icon-close.svg" alt="Close icon" />
            </CloseMenu>

            <MenuList>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </MenuList>
          </MenuContent>
        </MobileMenu>

        <RightContent>
          <CartButton tabIndex={0} type="button" aria-label="Cart Button">
            <img src="images/icon-cart.svg" alt="Cart icon" />
          </CartButton>
          <Avatar tabIndex={0} type="button" aria-label="User Avatar button">
            <img src="images/image-avatar.png" alt="User avatar image" />
          </Avatar>
        </RightContent>
      </HeaderWrapper>
    </Container>
  )
}
