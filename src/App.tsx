import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/Home'
import { AboutMe } from './routes/About'
import { useLayoutEffect } from 'react'
import { setTheme, Theme } from './common/theme'
import { MainLayout } from './MainLayout'
import { Tech } from './routes/Tech'
import { Error } from './routes/Error'
import { News } from './routes/News'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const queryClient = new QueryClient()
  const router = createBrowserRouter([
    {
      children: [
        {
          Component: Home,
          index: true,
          path: '/',
        },
        {
          Component: AboutMe,
          path: '/about',
        },
        {
          Component: Tech,
          path: '/tech',
        },
        { Component: News, path: '/news' },
        {
          Component: Error,
          path: '*',
        },
      ],
      element: <MainLayout />,
      path: '/',
    },
  ])

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(window.localStorage.getItem('theme') as Theme)
    }
  }, [])

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App
