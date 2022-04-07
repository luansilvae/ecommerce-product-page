import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Kumbh Sans', sans-serif;
}

@mixin menu-desktop {
  @media (min-width: 768px) {
    @content;
  }
}

:root {
  --primary: #FF7D1A;
  --primary-light: #FFEDE0;

  --blue-light: #F7F8FD;
  --blue: #B6BCC8;
  --blue-dark: #68707D;
  --blue-darkest: #2A2E37;

  --border: #E8E8EA;
  --white:	#FFFFFF;
  --black: #000000;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--white);
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`
