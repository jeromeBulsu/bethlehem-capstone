import React from "react";
import { Route, Redirect } from "react-router-dom";

function publicRoute({
  component: Component,
  isAuth,
  restricted,
  user,
  ...rest
}) {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth && restricted ? (
          user === "sampleadmin@yopmail.com" ?
          <Redirect to="/admin/carousel" /> : 
          <Redirect to="/guard/scanner" /> 
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default publicRoute;
