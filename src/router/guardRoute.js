import React from "react";
import { Route, Redirect } from "react-router-dom";

function guardRoute({ component: Component, isAuth, user, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
}

export default guardRoute;
