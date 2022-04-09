import React, { useCallback, useState } from 'react'
import { useCart } from '../../hooks/useCart'
import Cart from '../Cart'
import { CartIcon, CloseIcon, LogoIcon, MenuIcon } from '../Icons'

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
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const { totalProducts } = useCart()

  const handleToggleMenu = useCallback(() => {
    setMenuActive(state => !state)
  }, [])

  const handleOutsideClick = useCallback((event: any) => {
    if (event.target.id === 'mobile-menu') setMenuActive(false)
  }, [])

  const handleCartOpen = useCallback(() => setIsCartOpen(state => !state), [])

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
            <MenuIcon />
          </MenuButton>

          <Logo
            href="#"
            tabIndex={0}
            aria-label="Logo Sneakers"
            title="Logo Sneakers"
          >
            <LogoIcon />
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
              <CloseIcon />
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
          <CartButton
            tabIndex={0}
            type="button"
            aria-label="Cart Button"
            onClick={handleCartOpen}
          >
            <CartIcon />
            {totalProducts > 0 && <span>{totalProducts}</span>}
          </CartButton>

          <Cart isCartOpen={isCartOpen} />

          <Avatar tabIndex={0} type="button" aria-label="User Avatar button">
            <img src="images/image-avatar.png" alt="User avatar image" />
          </Avatar>
        </RightContent>
      </HeaderWrapper>
    </Container>
  )
}
