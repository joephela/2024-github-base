import { css } from '@emotion/react'
import { SocialLinks } from './SocialLinks'
import { gradientMixin } from '../common/sharedStyles'

const footerStyle = css`
  background: var(--bg-footer-header);
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--fg-color);
  padding-inline: var(--layout-padding);
  align-items: center;
  padding-block: 8px;
  ${gradientMixin}
`

const footerTextWrapperStyle = css`
  font-size: small;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-block: 8px;

  p {
    font-size: small;
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
