import { css, Global } from '@emotion/react'
import { Header } from './components/Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Fragment } from 'react'
import { Themes } from './common/theme'
import { Footer } from './components/Footer'
import { Moved } from './components/Moved'

const FOOTER_HEIGHT = '128px'
const HEADER_HEIGHT = '123px'

const mainStyle = css`
  height: 100%;
  margin-inline: var(--layout-padding);
  min-height: calc(100vh - ${FOOTER_HEIGHT} - ${HEADER_HEIGHT});
`

const globalStyles = css`
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 70% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  body {
    ${Themes}
    margin: 0;
    color: var(--fg-color);
    background: var(--bg-color);
    font-family: 'Open Sans', serif;
    font-size: medium;
    color: var(--fg-color);
    overflow-x: hidden;
    font-optical-sizing: auto;
    font-variation-settings: 'wdth' 100;
    font-style: normal;
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
      <ScrollRestoration />
      <Global styles={globalStyles} />
      {document.location.origin === 'https://joephela.github.io' ? (
        <Moved />
      ) : (
        <Fragment>
          <Header />
          <main css={mainStyle}>
            <Outlet />
          </main>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  )
}
