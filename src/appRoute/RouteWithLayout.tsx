import React from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
function RouteWithLayout( props:any) {
  const { component, layout, path, isPrivate, ...rest } = props;
  return (
    isPrivate ? <PrivateRoute component={component} path={path} layout={layout} {...rest} /> : <PublicRoute component={component} path={path} layout={layout} {...rest} />
  );
}
export default RouteWithLayout;