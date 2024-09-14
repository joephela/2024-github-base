import { css, Global } from '@emotion/react'
import { Header } from './Header'
import { SocialLinks } from './SocialLinks'
import { Outlet } from 'react-router-dom'

const footerStyle = css`
  margin-top: 50px;
`

const mainStyle = css`
  width: 100%;
  height: 100vh;
  color: var(--fg-color);
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Verdana, Arial, Helvetica, sans-serif;

  button {
    border: none;
    background: unset;
  }
`

const globalStyles = css`
  p {
    margin: 20px;
    margin-bottom: 48px;
    font-size: larger;
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  body {
    --bg-color: white;
    --fg-color: black;
    margin: 0;
    padding: 10px 50px;
    color: var(--fg-color);
    background-color: var(--bg-color);
  }

  ul {
    list-style: none;
  }

  li {
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: var(--fg-color);
  }
`

export function MainLayout() {
  return (
    <main css={mainStyle}>
      <Global styles={globalStyles} />
      <Header />
      <Outlet />
      <div css={footerStyle}>
        <SocialLinks />
      </div>
    </main>
  )
}
