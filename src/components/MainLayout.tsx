import { css, Global } from '@emotion/react'
import { Header } from './Header'
import { SocialLinks } from './SocialLinks'
import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'

const footerStyle = css`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`

const mainStyle = css`
  width: 100%;
  height: 100%;
`

const globalStyles = css`
  body {
    --color-black: #171717;
    --color-white: #f8f9f9;
    --color-accent-bg: #54787840;
    --color-accent-fg: #577e7d;

    --bg-color: var(--color-white);
    --fg-color: var(--color-black);

    margin: 0;
    padding: 10px 50px;
    color: var(--fg-color);
    background-color: var(--bg-color);
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: var(--fg-color);
    background-color: var(--bg-color);

    p {
      font-size: medium;
      line-height: 1.4em;
    }
  }

  ul {
    list-style: none;
  }

  li {
    text-decoration: none;
  }
`

export function MainLayout() {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <Header />
      <main css={mainStyle}>
        <Outlet />
      </main>
      <footer css={footerStyle}>
        <SocialLinks />
      </footer>
    </Fragment>
  )
}
