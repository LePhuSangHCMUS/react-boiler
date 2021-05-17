
import { lazy } from 'react';
export default [
  {
    label: "Home",
    path: '/',
    exact: true,
    isPrivate:false,
    page: lazy(() => import('@Pages/Home/Home')),
    layout: lazy(() => import('@Layouts/DefaultLayout/DefaultLayout'))
  },
  {
    label: "Login",
    path: '/user/login',
    exact: true,
    isPrivate:false,
    page: lazy(() => import("@Pages/Login/Login")),
    layout: lazy(() => import('@Layouts/UserLayout/UserLayout'))
  },
  {
    label: "LogOut",
    path: '/user/logout',
    exact: true,
    isPrivate:false,
    page: lazy(() => import("@Pages/Login/Login")),
    layout: lazy(() => import('@Layouts/UserLayout/UserLayout'))
  },


































  
  {
    label: "Page Not Found",
    path: '/',
    exact: false,
    isPrivate:false,
    page: lazy(() => import("@Pages/PageNotFound/PageNotFound")),
    layout: lazy(() => import('@Layouts/EmptyLayout/EmptyLayout'))
  },
] 
