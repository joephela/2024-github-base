import { css, Global } from '@emotion/react'
import { Header } from './Header'
import { SocialLinks } from './SocialLinks'
import { Outlet } from 'react-router-dom'

const footerStyle = css`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`

const mainStyle = css`
  width: 100%;
  height: 100vh;
  color: var(--fg-color);
  background-color: var(--bg-color);
  font-family: Verdana, Arial, Helvetica, sans-serif;

  button {
    border: none;
    background: unset;
  }
`

const globalStyles = css`
  p {
    font-size: medium;
    margin-block: 0;
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
