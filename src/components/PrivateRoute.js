import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../Context/UserContext';
const PrivateRoute = ({component: Component, ...rest}) => {
    const {isLogin,setIsLogin}=useContext(UserContext)

    return (

        <Route {...rest} render={props => (
            isLogin?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};


export default PrivateRoute