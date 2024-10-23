import { Route, Routes } from 'react-router-dom'
import { Home } from './routes/Home'
import { AboutMe } from './routes/About'
import { useLayoutEffect } from 'react'
import { setTheme, Theme } from './common/theme'
import { MainLayout } from './MainLayout'

function App() {
  useLayoutEffect(() => {
    typeof window !== 'undefined' &&
      setTheme(window.localStorage.getItem('theme') as Theme)
  }, [])

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Route>
    </Routes>
  )
}

export default App
