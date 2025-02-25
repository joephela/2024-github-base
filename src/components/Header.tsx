import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { Light } from '../assets/Light'
import { MOBILE_BREAKPOINT, swapTheme } from '../common/theme'
import Me from '../assets/me.jpeg'
import { Button } from './Button'
import { Nav } from './Nav'
import { Menu } from './Menu'

const headingStyles = css`
  margin: 0;
  max-width: 320px;
  font-size: 1.5em;
  font-weight: bold;
  font-variant: petite-caps;
`

const linkStyle = css`
  && {
    text-decoration: none;
    color: var(--fg-color);
  }
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
  width: 32px;
  height: 32px;
  margin-bottom: -6px;
`

const imageHeaderStyle = css`
  display: flex;
  align-items: center;
  gap: 16px;
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
      <Link to="/" css={linkStyle}>
        <span css={imageHeaderStyle}>
          <img
            src={Me}
            css={avatarStyle}
            alt="Picture of Joe Phelan"
            id="joephela-avatar"
          />

          <span css={headingStyles}>Joseph D. Phelan</span>
        </span>
      </Link>
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
