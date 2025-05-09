import { css, Global } from '@emotion/react'
import { Header } from './components/Header'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Fragment } from 'react'
import { MOBILE_BREAKPOINT, Themes } from './common/theme'
import { Footer } from './components/Footer'
import { Moved } from './components/Moved'
import { Avatar } from './components/Avatar'
import { reducedMotionMixin } from './common/sharedStyles'

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
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 7rem 1rem;
  background: linear-gradient(
    180deg,
    var(--bg-footer-header) 0%,
    var(--bg-color) 100%
  );
  color: var(--light-text-color);
  margin-bottom: 2rem;
  z-index: 1;

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 3.5rem 1.5rem;
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

const heroShapesStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  display: block;
  z-index: -1;

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: 0.6;
    }
    25% {
      transform: translateY(-10px) translateX(5px) rotate(2deg);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-20px) translateX(10px) rotate(5deg);
      opacity: 0.7;
    }
    75% {
      transform: translateY(-10px) translateX(15px) rotate(2deg);
      opacity: 0.8;
    }
    100% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: 0.6;
    }
  }

  .shape {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    background: color-mix(in srgb, var(--bg-color) 50%, white 20%);
    border-radius: 50%;
    opacity: 0.5;
    box-shadow: 0 0 8px var(--bg-footer-header);
  }

  .shape-1 {
    ${reducedMotionMixin}
    width: 50px;
    height: 50px;
    top: 50px;
    left: 50px;
    animation: float 18s infinite ease-in-out;
  }

  .shape-2 {
    ${reducedMotionMixin}
    width: 180px;
    height: 180px;
    bottom: 10%;
    right: 5%;
    animation: float 22s infinite ease-in-out reverse;
  }

  .shape-3 {
    ${reducedMotionMixin}
    width: 120px;
    height: 120px;
    top: 40%;
    left: 15%;
    animation: float 16s infinite ease-in-out 2s;
  }

  .shape-4 {
    ${reducedMotionMixin}
    width: 100px;
    height: 100px;
    bottom: 5%;
    left: 30%;
    animation: float 20s infinite ease-in-out 1s;
    @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
      display: none;
    }
  }

  .shape-5 {
    ${reducedMotionMixin}
    width: 150px;
    height: 150px;
    top: 20%;
    right: 10%;
    animation: float 24s infinite ease-in-out 3s;

    @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
      display: none;
    }
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
              <div css={heroShapesStyle}>
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
                <div className="shape shape-5"></div>
              </div>
              <div css={avatarWrapperStyle}>
                <Avatar />
                <h1 css={headingStyle}>Joe Phelan</h1>
              </div>
              <p css={paragraphTextStyle}>
                Seasoned software engineer bringing 12+ years of experience in
                web application development, combined with a strong dedication
                to continuous learning. Passionate about Improving legacy
                systems, partnering with UX specialists to craft innovative
                features, and developing creative solutions to navigate our
                industry's constant evolution.
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
