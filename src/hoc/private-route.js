import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateLayout } from './private-layout'

export const PrivateRoute = () => {
    const auth = true; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ?
        <PrivateLayout>
            <Outlet />
        </PrivateLayout>
        :
        <Navigate to="/login" />;
}