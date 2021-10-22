import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import MpesaPin from './pages/MpesaPin';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Grow from './pages/Grow';
import Settings from './pages/Settings';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/mpesa',
      element: <DashboardLayout />,
      children: [
        { path: '/mpesa', element: <Navigate to="/mpesa/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'my-spend', element: <User /> },
        { path: 'transact', element: <Products /> },
        { path: 'discover', element: <Blog /> },
        { path: 'grow', element: <Grow/> },
        { path: 'settings', element: <Settings/> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'password', element: <MpesaPin /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/login" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
