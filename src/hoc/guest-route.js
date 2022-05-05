import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { GuestLayout } from './guest-layout'

export const GuestRoute = () => {
    const auth = true; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ?
        <GuestLayout>
            <Outlet />
        </GuestLayout>
        :
        <Navigate to="/login" />;
}



/*export const GuestRoute = ({
  exact,
  path,
  component: Component,
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={props =>
        //<GuestLayout>
            <Component {...props} />
        //</GuestLayout>
      }
    />
  )
}*/