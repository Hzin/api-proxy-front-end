import { lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Route from '../views/Route'

const Dashboard = lazy(() => import('../views/Dashboard'))

const Router = () => {
  const allRoutes = [
    {
      path: 'dashboard',
      element: <Dashboard />
    },
    {
      path: 'route',
      element: <Route />
    },
  ]

  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Navigate replace to='/dashboard' />
    },
    ...allRoutes
  ])

  return routes
}

export default Router