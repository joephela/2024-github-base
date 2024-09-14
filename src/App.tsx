import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Header } from './components/Header'
import { css, Global } from '@emotion/react'
import { SocialLinks } from './components/SocialLinks'
import { AboutMe } from './components/AboutMe'
import { useLayoutEffect } from 'react'
import { setTheme } from './common/theme'

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

function App() {
  useLayoutEffect(() => {
    setTheme()
  }, [])

  return (
    <main css={mainStyle}>
      <Global styles={globalStyles} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} index={true}></Route>
        <Route path="/aboutMe" element={<AboutMe />}></Route>
      </Routes>
      <div css={footerStyle}>
        <SocialLinks />
      </div>
    </main>
  )
}

export default App
