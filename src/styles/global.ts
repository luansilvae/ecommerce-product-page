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
  --primary: hsl(26, 100%, 55%);
  --primary-light: hsl(25, 100%, 94%);

  --blue-light: hsl(223, 64%, 98%);
  --blue: hsl(220, 14%, 75%);
  --blue-dark: hsl(219, 9%, 45%);
  --blue-darkest:  hsl(220, 13%, 13%);

  --border: #e8e8ea;
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
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
