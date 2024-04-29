import { createBrowserRouter } from 'react-router-dom';

import { Root } from '../Root';
import { AuthLayout, DashboardLayout } from '../layouts';
import { ProductsPage, Dashboard, LoginPage, AccountPage, SignupPage } from '../pages';


export const router = createBrowserRouter( [
  {
    path: '/',
    element: <Root />,
    children: [
      /// Dashboard Routes
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <Dashboard />
          },
          {
            path: 'bears',
            element: <ProductsPage />
          },
          {
            path: 'person',
            element: <AccountPage />
          },

        ]
      },

      /// Auth Routes
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />
          },
          {
            path: 'signup',
            element: <SignupPage />
          }
        ]

      },

    ],
  },
] );