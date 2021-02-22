import React from 'react'
// import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

// import { getAuth } from '@/selectors'

interface PublicRouteProps extends RouteProps {
  component: any,
  path:string,
  layout:any
}


  const PublicRoute: React.FC<PublicRouteProps> = ({ component,path,layout, ...rest }) => {
    // const { isAuthenticated } = useSelector(getAuth)
    const  isAuthenticated  = false
  
    return (
      <Route
      path={path}
      render={(props) =>
          isAuthenticated === false ?React.createElement( layout, props, React.createElement(component, props))
           :
            <Redirect to="/app" />
        }
        {...rest}
      />

    )
  }

  export default PublicRoute;
