import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider, createTheme, Typography } from "@mui/material";
import landingPage from "../pages/user/LandingPage";
import OurStory from "../pages/user/OurStory";
import AboutUs from "../pages/user/AboutUs";
import Appointment from "../pages/user/appointment/Index";
import Individual from "../pages/user/appointment/Individual";
import Organization from "../pages/user/appointment/Organization";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/admin/SignIn";
import Admin from "../pages/admin/List";
import Accounts from "../pages/admin/Accounts";
import Stories from "../pages/admin/Stories";
import Carousel from "../pages/admin/Carousel";
import PublicRoute from "../router/publicRoute";
import PrivateRoute from "../router/privateRoute";
import GuardRoute from "../router/guardRoute";
import Guard from "../pages/guard/Index";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import theme from "../utils/theme";

const classes = {};

export default function Index() {
  const THEME = createTheme(theme(false));
  const [state, setstate] = useState({
    isAuth: false,
    isLoading: true,
    user: "",
    scanner: false,
  });

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setstate({ isAuth: true, isLoading: false, user: user.email });
      } else {
        setstate({ isAuth: false, isLoading: false });
      }
    });
  }, []);

  if (state.isLoading) {
    return (
      <div className={classes.loading}>
        <Typography variant="h4">Loading...</Typography>
      </div>
    );
  }

  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" exact />
          </Route>
          <PublicRoute
            component={landingPage}
            isAuth={state.isAuth}
            restricted={true}
            user={state.user}
            path="/home"
            exact
          />
          <PublicRoute
            component={OurStory}
            isAuth={state.isAuth}
            user={state.user}
            restricted={true}
            path="/ourstory"
            exact
          />
          <PublicRoute
            component={AboutUs}
            isAuth={state.isAuth}
            user={state.user}
            restricted={true}
            path="/aboutus"
            exact
          />
          <PublicRoute
            component={Appointment}
            isAuth={state.isAuth}
            user={state.user}
            restricted={true}
            path="/appointment"
            exact
          />
          <PublicRoute
            component={Individual}
            isAuth={state.isAuth}
            user={state.user}
            restricted={true}
            path="/appointment/individual/form"
            exact
          />
          <PublicRoute
            component={Organization}
            isAuth={state.isAuth}
            user={state.user}
            restricted={true}
            path="/appointment/organization/form"
            exact
          />
          <PublicRoute
            component={SignIn}
            isAuth={state.isAuth}
            user={state.user}
            restricted={true}
            path="/signin"
            exact
          />
          <PrivateRoute
            component={Admin}
            isAuth={state.isAuth}
            user={state.user}
            path="/admin/list"
            exact
          />
          <PrivateRoute
            component={Accounts}
            isAuth={state.isAuth}
            user={state.user}
            path="/admin/accounts"
            exact
          />
          <PrivateRoute
            component={Carousel}
            isAuth={state.isAuth}
            user={state.user}
            path="/admin/carousel"
            exact
          />
          <PrivateRoute
            component={Stories}
            isAuth={state.isAuth}
            user={state.user}
            path="/admin/stories"
            exact
          />
          <GuardRoute
            component={Guard}
            isAuth={state.isAuth}
            user={state.user}
            path="/guard/scanner"
            exact
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
