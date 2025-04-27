import { css } from '@emotion/react'

export const MOBILE_BREAKPOINT = '600px'

/**
 * Set the theme to the one specified in props
 */
export function setTheme(theme: Theme) {
  if (!theme) {
    return
  }

  document.body.classList.remove('light')
  document.body.classList.remove('dark')
  document.body.classList.add(theme)
}

export type Theme = 'dark' | 'light' | null

export const Themes = css`
  --color-black: #171717;
  --color-white: #ffffff;
  --color-light-blue: #97cbcb;
  --color-blue: #486666;
  --color-light-gray: #aba5a5;
  --color-gray: #393939;
  --layout-padding: 32px;

  /* RGB values for rgba usage */
  --color-blue-rgb: 72, 102, 102;
  --color-light-blue-rgb: 151, 203, 203;
  --color-black-rgb: 23, 23, 23;
  --color-white-rgb: 255, 255, 255;

  --bg-accent: var(--color-blue);
  --bg-accent-rgb: var(--color-blue-rgb);
  --fg-accent: var(--color-white);
  --hover-color: #203939;
  --border-color: var(--color-light-gray);
  --bg-color: var(--color-white);
  --fg-color: var(--color-black);
  --bg-footer-header: var(--color-light-blue);
  --z-index-modal: 15;
  --z-index-popover: 10;

  a {
    color: blue;
  }

  &.dark {
    --bg-color: var(--color-black);
    --fg-color: var(--color-white);
    --bg-accent: var(--color-light-blue);
    --bg-accent-rgb: var(--color-light-blue-rgb);
    --fg-accent: var(--color-black);
    --bg-footer-header: darkslategray;
    --hover-color: #9ed0d0;
    --border-color: var(--color-gray);

    a {
      color: darkturquoise;
    }
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    --layout-padding: 16px;
  }
`

export function swapTheme() {
  const currentTheme = window.localStorage.getItem('theme')
  const newTheme = currentTheme === 'dark' || !currentTheme ? 'light' : 'dark'

  if (typeof window !== 'undefined') {
    window.localStorage.setItem('theme', newTheme)
  }

  setTheme(newTheme)
}
