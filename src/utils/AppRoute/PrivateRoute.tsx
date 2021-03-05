import React from 'react';
// import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom';

// import { getAuth } from '@/selectors'

interface PrivateRouteProps extends RouteProps {
  component: any;
  path: string;
  layout: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  path,
  layout,
  ...rest
}) => {
  // const { isAuthenticated } = useSelector(getAuth)
  const isAuthenticated = true;

  return (
    <Route
      path={path}
      render={(props) =>
        isAuthenticated === true ? (
          React.createElement(
            layout,
            props,
            React.createElement(component, props),
          )
        ) : (
          <Redirect to="/" />
        )
      }
      {...rest}
    />
  );
};

export default PrivateRoute;
