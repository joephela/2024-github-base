import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/Home'
import { AboutMe } from './routes/About'
import { useLayoutEffect } from 'react'
import { setTheme, Theme } from './common/theme'
import { MainLayout } from './MainLayout'
import { Tech } from './routes/Tech'
import { Error } from './routes/Error'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          Component: Home,
          index: true,
        },
        {
          path: '/about',
          Component: AboutMe,
        },
        {
          path: '/tech',
          Component: Tech,
        },
        {
          path: '/*',
          Component: Error,
        },
      ],
    },
  ])

  useLayoutEffect(() => {
    typeof window !== 'undefined' &&
      setTheme(window.localStorage.getItem('theme') as Theme)
  }, [])

  return <RouterProvider router={router} />
}

export default App
