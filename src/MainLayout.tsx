import { css, Global } from '@emotion/react'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import { Themes } from './common/theme'
import { Footer } from './Footer'

const mainStyle = css`
  height: 100%;
  margin-inline: var(--layout-padding);
`

const globalStyles = css`
  body {
    ${Themes}
    overflow-x:hidden;
    margin: 0;
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
      <Footer />
    </Fragment>
  )
}
