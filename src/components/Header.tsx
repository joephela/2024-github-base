import { css } from '@emotion/react'
import { Link, useLocation } from 'react-router-dom'
import { Light } from '../assets/Light'
import { swapTheme } from '../common/theme'

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

const activeLink = css`
  border-bottom: 1px solid purple;
`

export function Header() {
  const { pathname } = useLocation()
  return (
    <div css={headerWrapperStyle}>
      <h1 css={headingStyles}>Joseph D. Phelan</h1>
      <div css={headingRightSideStyle}>
        <nav>
          <ul css={navStyle}>
            <li>
              <Link to="/" css={pathname === '/' && activeLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" css={pathname === '/about' && activeLink}>
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
