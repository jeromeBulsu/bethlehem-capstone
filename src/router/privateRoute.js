import React from "react";
import { Route, Redirect } from "react-router-dom";

function privateRoute({ component: Component, isAuth, user, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth && user === "sampleadmin@yopmail.com" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
}

export default privateRoute;
