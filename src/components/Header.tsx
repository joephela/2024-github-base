import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { Light } from '../assets/Light'
import { MOBILE_BREAKPOINT, swapTheme } from '../common/theme'
import Me from '../assets/me.jpeg'
import { Button } from './Button'
import { Nav } from './Nav'
import { Menu } from './Menu'
import { gradientMixin } from '../common/sharedStyles'

const headingStyles = css`
  margin: 0;
  max-width: 320px;
  font-size: 1.2em;
  font-weight: bold;
  font-variant: petite-caps;
`

const headerWrapperStyle = css`
  background: var(--bg-footer-header);
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--fg-color);
  padding-inline: var(--layout-padding);
  padding-block: 16px;
  ${gradientMixin}
`

const headingRightSideStyle = css`
  display: flex;
  gap: 20px;
  align-items: center;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    && {
      background: red;
      display: none;
    }
  }
`

const avatarStyle = css`
  border-radius: 100%;
  width: 24px;
  height: 24px;
`
const imageHeaderStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
`

const menuButtonStyle = css`
  display: none;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    display: block;
  }
`

export function Header() {
  return (
    <header css={headerWrapperStyle}>
      <div css={imageHeaderStyle}>
        <Link to="/">
          <img
            src={Me}
            css={avatarStyle}
            alt="Picture of Joe Phelan"
            id="joephela-avatar"
          />
        </Link>

        <span css={headingStyles}>Joseph D. Phelan</span>
      </div>
      <div>
        <div css={menuButtonStyle}>
          <Menu />
        </div>
        <div css={headingRightSideStyle}>
          <Nav />
          <Button
            onClick={() => {
              swapTheme()
            }}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <Light fill={'var(--fg-color)'} />
          </Button>
        </div>
      </div>
    </header>
  )
}
