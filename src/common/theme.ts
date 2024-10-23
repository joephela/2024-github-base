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
  --color-white: #f8f9f9;
  --color-light-blue: #7aaaaa;
  --color-blue: #486666;
  --layout-padding: 32px;

  --bg-accent: var(--color-blue);
  --fg-accent: var(--color-white);
  --bg-color: var(--color-white);
  --fg-color: var(--color-black);

  a {
    color: var(--bg-accent);
  }

  &.dark {
    --bg-color: var(--color-black);
    --fg-color: var(--color-white);
    --bg-accent: var(--color-light-blue);
    --fg-accent: var(--color-black);
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    --layout-padding: 16px;
  }
`

export function swapTheme() {
  const currentTheme = window.localStorage.getItem('theme')
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'

  typeof window !== 'undefined' &&
    window.localStorage.setItem('theme', newTheme)

  setTheme(newTheme)
}
