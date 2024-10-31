import { css } from '@emotion/react'
import { Link, useLocation } from 'react-router-dom'
import { MOBILE_BREAKPOINT, swapTheme } from '../common/theme'
import { Button } from './Button'
import { focusMixin } from '../common/sharedStyles'

const navStyle = css`
  display: flex;
  gap: 20px;
  padding: 0px;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
`

const linkStyle = css`
  && {
    text-decoration: none;
    color: var(--fg-color);

    ${focusMixin}
  }
`

const activeLink = css`
  border-bottom: 1px solid var(--bg-accent);
`

const mobileToggleStyle = css`
  display: none;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    display: block;
  }
`

export function Nav() {
  const { pathname } = useLocation()

  return (
    <nav role="navigation">
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
        <li>
          <Link
            to="/tech"
            css={[linkStyle, pathname === '/tech' && activeLink]}
            aria-current={pathname === '/tech' ? 'page' : undefined}
          >
            Tech
          </Link>
        </li>
        <li>
          <Link
            to="/news"
            css={[linkStyle, pathname === '/news' && activeLink]}
            aria-current={pathname === '/news' ? 'page' : undefined}
          >
            News
          </Link>
        </li>
        <li css={mobileToggleStyle}>
          <Button
            onClick={() => {
              swapTheme()
            }}
            css={{ fontSize: 'xxx-large' }}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            Toggle Theme
          </Button>
        </li>
      </ul>
    </nav>
  )
}
