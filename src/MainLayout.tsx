import { css, Global } from '@emotion/react'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import { Themes } from './common/theme'
import { Footer } from './Footer'
import { Moved } from './components/Moved'

const FOOTER_HEIGHT = '128px'
const HEADER_HEIGHT = '123px'

const mainStyle = css`
  height: 100%;
  margin-inline: var(--layout-padding);
  min-height: calc(100vh - ${FOOTER_HEIGHT} - ${HEADER_HEIGHT});
`

const globalStyles = css`
  body {
    ${Themes}
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
      {document.location.origin === 'https://joephela.github.io' ? (
        <Moved />
      ) : (
        <Fragment>
          <Global styles={globalStyles} />
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
