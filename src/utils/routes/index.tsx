import { Navigate, RouteObject } from 'react-router-dom';

import AuthLayout from '@layout/AuthLayout';
import DashboardLayout from '@layout/DashboardLayout';
import HomePage from '@pages/HomePage';
import SignInPage from '@pages/SignInPage';
import SignUpPage from '@pages/SignUpPage';

import { ROUTES } from './constants';

const routes = (isAuth: boolean): RouteObject[] => [
  {
    path: ROUTES.HOME,
    element: isAuth ? <DashboardLayout /> : <Navigate to={ROUTES.SIGN_IN} />,
    children: [{ path: ROUTES.HOME, element: <HomePage /> }]
  },
  {
    path: ROUTES.HOME,
    element: !isAuth ? <AuthLayout title='Авторизация' /> : <Navigate to='/' />,
    children: [
      { path: ROUTES.SIGN_IN, element: <SignInPage /> },
      { path: ROUTES.HOME, element: <Navigate to={ROUTES.SIGN_IN} /> }
    ]
  },
  {
    path: ROUTES.HOME,
    element: !isAuth ? <AuthLayout title='Регистрация' /> : <Navigate to='/' />,
    children: [
      { path: ROUTES.SIGN_UP, element: <SignUpPage /> },
      { path: ROUTES.HOME, element: <Navigate to={ROUTES.SIGN_UP} /> }
    ]
  }
];

export default routes;
