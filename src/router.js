import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AvatarPage from './pages/AvatarPage'
import QuotePage from './pages/QuotePage'
import RootPage from './pages/RootPage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/avatar',
    element: <AvatarPage />
  },
  {
    path: '/quote',
    element: <QuotePage />
  }
])

const Router = () => <RouterProvider router={router} />

export default Router
