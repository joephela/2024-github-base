import { css } from '@emotion/react'
import { SocialLinks } from './components/SocialLinks'

const footerStyle = css`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--fg-color);
  padding-inline: var(--layout-padding);
`

const footerTextStyle = css`
  font-size: small;
`

export function Footer() {
  return (
    <footer css={footerStyle}>
      <p css={footerTextStyle}>
        Copyright © 2024 Joseph Phelan. Built by me using{' '}
        <a href="https://vite.dev/" rel="noreferrer" target="_blank">
          Vite
        </a>
        .
      </p>
      <SocialLinks />
    </footer>
  )
}
