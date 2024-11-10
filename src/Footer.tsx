import { css } from '@emotion/react'
import { SocialLinks } from './components/SocialLinks'

const footerStyle = css`
  background: var(--bg-footer-header);
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--fg-color);
  padding-inline: var(--layout-padding);
  align-items: center;
  padding-block: 8px;
`

const footerTextWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-block: 8px;

  p {
    margin: 0;
    padding: 0;
  }
`

export function Footer() {
  return (
    <footer css={footerStyle}>
      <div css={footerTextWrapperStyle}>
        <a
          href="https://github.com/joephela/2024-github-base"
          rel="noreferrer"
          target="_blank"
        >
          Check out the code!
        </a>
        <p>Copyright © 2024 Joseph Phelan.</p>
      </div>
      <SocialLinks />
    </footer>
  )
}
