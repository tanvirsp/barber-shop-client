import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';



const PrivateRoute = ({ children, ...rest }) => {
    const {userInfo} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;


    return (
        <Route
            {...rest}
            render={({ location }) =>
            loggedInUser.email  ? (
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

export default PrivateRoute;