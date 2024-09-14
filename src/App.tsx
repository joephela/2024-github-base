import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { AboutMe } from './components/AboutMe'
import { useLayoutEffect } from 'react'
import { setTheme } from './common/theme'
import { MainLayout } from './components/MainLayout'

function App() {
  useLayoutEffect(() => {
    setTheme()
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
