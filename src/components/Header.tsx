import { css } from '@emotion/react'
import { Link, useLocation } from 'react-router-dom'
import { Light } from '../assets/Light'
import { swapTheme } from '../common/theme'
import Me from '../assets/me.jpeg'

const headingStyles = css`
  margin: 0;
  max-width: 320px;
  font-variant: petite-caps;
`

const headerWrapperStyle = css`
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--fg-color);
  padding: 8px;
  border-radius: 4px;
`

const headingRightSideStyle = css`
  display: flex;
  gap: 20px;
`

const navStyle = css`
  display: flex;
  gap: 20px;
  padding: 0px;
`

const linkStyle = css`
  text-decoration: none;
  color: var(--fg-color);
`

const activeLink = css`
  border-bottom: 1px solid purple;
`

const avatarStyle = css`
  border-radius: 100%;
  width: 24px;
  height: 24px;
`
const imageHeaderStyle = css`
  display: flex;
  gap: 8px;
`

export function Header() {
  const { pathname } = useLocation()
  return (
    <div css={headerWrapperStyle}>
      <div css={imageHeaderStyle}>
        <img
          src={Me}
          css={avatarStyle}
          alt="Picture of Joe Phelan"
          id="joephela-avatar"
        />

        <h2 css={headingStyles}>Joseph D. Phelan</h2>
      </div>
      <div css={headingRightSideStyle}>
        <nav>
          <ul css={navStyle}>
            <li>
              <Link to="/" css={[linkStyle, pathname === '/' && activeLink]}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                css={[linkStyle, pathname === '/about' && activeLink]}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            swapTheme()
          }}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          <Light fill={'var(--fg-color)'} />
        </button>
      </div>
    </div>
  )
}
