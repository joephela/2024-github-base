import { css } from '@emotion/react'
import { Link, useLocation } from 'react-router-dom'
import { Light } from '../assets/Light'
import { swapTheme } from '../common/theme'
import Me from '../assets/me.jpeg'
import { Button } from './Button'

const headingStyles = css`
  margin: 0;
  max-width: 320px;
  font-size: 1.2em;
  font-weight: bold;
`

const headerWrapperStyle = css`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--fg-color);
  padding-inline: var(--layout-padding);
  padding-block-start: 16px;
`

const headingRightSideStyle = css`
  display: flex;
  gap: 20px;
  align-items: center;
`

const navStyle = css`
  display: flex;
  gap: 20px;
  padding: 0px;
`

const linkStyle = css`
  text-decoration: none;
  color: var(--fg-color);

  :hover,
  :focus {
    text-shadow: var(--bg-accent) 0px 0 1px;
  }
`

const activeLink = css`
  border-bottom: 1px solid var(--bg-accent);
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

export function Header() {
  const { pathname } = useLocation()
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
      <div css={headingRightSideStyle}>
        <nav>
          <ul css={navStyle}>
            <li>
              <Link
                to="/"
                css={[linkStyle, pathname === '/' && activeLink]}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                css={[linkStyle, pathname === '/about' && activeLink]}
                aria-current={pathname === '/about' ? 'page' : undefined}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
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
    </header>
  )
}
