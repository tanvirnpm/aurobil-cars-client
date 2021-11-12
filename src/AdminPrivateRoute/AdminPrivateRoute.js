import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminPrivateRoute = ({children, ...rest}) => {
    const { user } = useAuth();
    return (
        <Route 
        {...rest}
        render={({ location }) =>
            user.email && user.admin ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            )
        }
        />
    );
};

export default AdminPrivateRoute;