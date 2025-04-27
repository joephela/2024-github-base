import { css, Global } from '@emotion/react'
import { Header } from './components/Header'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Fragment } from 'react'
import { MOBILE_BREAKPOINT, Themes } from './common/theme'
import { Footer } from './components/Footer'
import { Moved } from './components/Moved'
import { Avatar } from './components/Avatar'

const FOOTER_HEIGHT = '108px'
const HEADER_HEIGHT = '86px'

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

  li {
    text-decoration: none;
  }

  h1 {
    font-size: 2em;
    margin-block: 1em;
  }
`

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(
    180deg,
    var(--bg-footer-header) 0%,
    var(--bg-color) 100%
  );
  color: var(--light-text-color);
  margin-bottom: 2rem;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 1.5rem;
  }
`

const avatarWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
  }
`

const headingStyle = css`
  font-size: 2.5rem;
  margin: 0;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 2rem;
  }
`

const paragraphTextStyle = css`
  max-width: 42em;
  font-size: 1.25rem;
  line-height: 1.6;
  margin-top: 1rem;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 100%;
    font-size: 1rem;
  }
`

export function MainLayout() {
  const { pathname } = useLocation()

  return (
    <Fragment>
      <ScrollRestoration />
      <Global styles={globalStyles} />
      {document.location.origin === 'https://joephela.github.io' ? (
        <Moved />
      ) : (
        <Fragment>
          <Header />
          {pathname === '/' ? (
            <section css={sectionStyle}>
              <div css={avatarWrapperStyle}>
                <Avatar />
                <h1 css={headingStyle}>Joe Phelan</h1>
              </div>
              <p css={paragraphTextStyle}>
                Experienced software developer with a decade of expertise in
                building web applications, specializing in front-end
                development. Passionate about modernizing legacy code and
                collaborating with UX teams to design new innovative features.
              </p>
            </section>
          ) : null}
          <main css={mainStyle}>
            <Outlet />
          </main>
          <Footer />
        </Fragment>
      )}
    </Fragment>
  )
}
