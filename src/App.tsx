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

function App() {
  const queryClient = new QueryClient()
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
        { path: '/news', Component: News },
        {
          path: '*',
          Component: Error,
        },
      ],
    },
  ])

  useLayoutEffect(() => {
    typeof window !== 'undefined' &&
      setTheme(window.localStorage.getItem('theme') as Theme)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
