import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ checking }) => {
    
    return checking
        ? <Outlet />
        : <Navigate to={`/`} />;
};

PrivateRoute.propTypes = {
    checking: PropTypes.bool
};